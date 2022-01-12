import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/UI/Header';
import RenderHtmlText from '../../../components/UI/RenderHtmlText';
import EntityDetail from '../../../components/EntityDetail/EntityDetail';
import LoadingIndicator from '../../../components/UI/LoadingIndicator';
import EpisodeOverlay from '../../../components/EpisodeOverlay/EpisodeOverlay';
import SectionInfo from '../../../components/EntityDetail/SectionInfo';
import CustomListItem from '../../../components/UI/CustomListItem';
import ConnectionError from '../../../components/UI/ConnectionError';
import useController from './controller';
import {retryFetch} from '../../../util/helpers';
import {textStyles} from '../../../styles/main';
import styles from './styles';

const SerieDetail = ({navigation, route}) => {
  const {serie} = route.params;
  const [
    {noSeasons, noEpisodes, seasons, showEpisodeModal, selectedEpisode, api},
    {updateState},
    {loading, error},
  ] = useController(serie);
  return (
    <>
      <EpisodeOverlay
        episode={selectedEpisode}
        isVisible={showEpisodeModal}
        onBackdropPress={() => {
          updateState({
            showEpisodeModal: false,
          });
        }}
      />

      <SafeAreaView style={styles.safeAreaView}>
        <Header title="Serie Details" navigation={navigation} />
        <EntityDetail
          type={'Serie'}
          title={serie?.name}
          icon="tv"
          backgroundImage={serie?.image?.original}
          defaultBgImage={require('../../../../assets/images/showDefaultImage.png')}
          infoTitle={serie?.network?.name}
          infoSubtitle={serie?.network?.country?.name}
          infoCounting={
            noSeasons <= 0
              ? ''
              : `${noSeasons} Seasons • ${noEpisodes} Episodes`
          }>
          {!loading ? (
            <>
              {!error ? (
                <>
                  <SectionInfo
                    containerStyle={[
                      styles.noMarginTop,
                      styles.summaryMarginBottom,
                    ]}
                    contentStyle={styles.noMarginTop}
                    showDivider={false}
                    title={'Summary'}>
                    <RenderHtmlText html={serie?.summary} />
                  </SectionInfo>
                  <SectionInfo title={'Genres'}>
                    <View style={styles.horizontalList}>
                      {serie?.genres.map(genre => (
                        <Text key={genre} style={textStyles.valueLabel}>
                          {' '}
                          • {genre}
                        </Text>
                      ))}
                    </View>
                  </SectionInfo>
                  <SectionInfo title={'Schedule'}>
                    <View style={styles.horizontalList}>
                      {serie?.schedule?.days.map(day => (
                        <View key={day}>
                          <Text style={[textStyles.label, styles.dayLabel]}>
                            {day}
                          </Text>
                          <Text style={textStyles.valueLabel}>
                            {serie?.schedule?.time}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </SectionInfo>
                  <SectionInfo title={'Episodes'}>
                    <EpisodesSection
                      onPress={ep => {
                        updateState({
                          showEpisodeModal: true,
                          selectedEpisode: ep,
                        });
                      }}
                      seasons={seasons}
                    />
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
    </>
  );
};

const EpisodesSection = ({seasons, onPress = ep => {}}) => {
  const seasonsArr = Object.keys(seasons);
  if (seasonsArr.length <= 0)
    return (
      <Text style={textStyles.valueLabel}>
        No episodes found for this serie
      </Text>
    );
  return (
    <>
      {seasonsArr.map(season => (
        <View key={String('season' + season)} style={styles.seasonContainer}>
          <Text style={styles.seasonLabel}>• Season {season}</Text>
          <View style={styles.episodesContainer}>
            {seasons[season].map(ep => (
              <CustomListItem
                key={ep?.name + ep?.number}
                title={`Episode #${ep?.number}`}
                subtitle={ep?.name}
                onPress={() => {
                  onPress(ep);
                }}
              />
            ))}
          </View>
        </View>
      ))}
    </>
  );
};

export default SerieDetail;
