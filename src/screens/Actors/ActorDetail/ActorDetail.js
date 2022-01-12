import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/UI/Header';
import EntityDetail from '../../../components/EntityDetail/EntityDetail';
import LoadingIndicator from '../../../components/UI/LoadingIndicator';
import ConnectionError from '../../../components/UI/ConnectionError';
import CustomListItem from '../../../components/UI/CustomListItem';
import SectionInfo from '../../../components/EntityDetail/SectionInfo';
import {formatDate, retryFetch} from '../../../util/helpers';
import useController from './controller';
import {textStyles} from '../../../styles/main';

const ActorDetail = ({navigation, route}) => {
  const {actor} = route.params;
  const [{api}, {updateState}, {loading, error, data}] = useController(actor);
  const series = data ?? [];
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Actor Details" navigation={navigation} />
      <EntityDetail
        type={'Actor'}
        title={actor?.name}
        icon="user"
        backgroundImage={actor?.image?.original}
        defaultBgImage={require('../../../../assets/images/showDefaultImage.png')}
        infoTitle={`Country of Birth: ${actor?.country?.name ?? 'Unknown'}`}
        infoSubtitle={`Gender: ${actor?.gender ?? 'Unknown'}`}
        infoCounting={
          series.length <= 0 ? '' : `Participated in: ${series.length} Series`
        }>
        {!loading ? (
          <>
            {!error ? (
              <>
                <SectionInfo showDivider={false} title={'Date of Birth'}>
                  <Text style={textStyles.valueLabel}>
                    {formatDate(actor?.birthday)}
                  </Text>
                </SectionInfo>
                {actor?.deathday && (
                  <SectionInfo showDivider={false} title={'Date of Death'}>
                    <Text style={textStyles.valueLabel}>
                      {formatDate(actor?.deathday)}
                    </Text>
                  </SectionInfo>
                )}
                <SectionInfo title={'Series'}>
                  {series.length > 0 ? (
                    <>
                      {series.map(({_embedded: {show: serie}}) => (
                        <CustomListItem
                          key={serie?.name}
                          title={serie?.name}
                          subtitle={!!serie?.genres[0] && serie?.genres[0]}
                          onPress={() => {
                            navigation.navigate('SerieDetail', {
                              serie,
                            });
                          }}
                        />
                      ))}
                    </>
                  ) : (
                    <Text style={textStyles.valueLabel}>
                      No series found for this actor
                    </Text>
                  )}
                </SectionInfo>
              </>
            ) : (
              <ConnectionError
                onRetry={() => {
                  retryFetch(api, updateState);
                }}
              />
            )}
          </>
        ) : (
          <View style={styles.loadingIndicator}>
            <LoadingIndicator />
          </View>
        )}
      </EntityDetail>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    width: '100%',
    flex: 1,
  },

  loadingIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default ActorDetail;
