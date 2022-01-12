import React from 'react';
import {View, FlatList, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from '../UI/Header';
import LoadingIndicator from '../UI/LoadingIndicator';
import SearchInput from '../UI/SearchInput';
import ConnectionError from '../UI/ConnectionError';
import NoResults from '../UI/NoResults';
import {retryFetch} from '../../util/helpers';
import useController from './controller';
import styles from './styles';

const EntityListing = ({
  entityTitle,
  entityURI,
  searchEntityURI,
  searchInputPlaceHolder,
  listKeyExtractor,
  renderEntity,
}) => {
  const [
    {inputValue, entities, loadingMoreEntities, refreshing, api},
    {getEntities, loadMoreEntities, updateState},
    {loading, error},
  ] = useController({entityURI, searchEntityURI});
  return (
    <TouchableWithoutFeedback
      touchSoundDisabled={true}
      onPress={() => {
        Keyboard.dismiss();
      }}
      style={styles.flexContainer}>
      <View style={styles.flexContainer}>
        <Header title={entityTitle} />
        <View style={styles.mainContainer}>
          <SearchInput
            value={inputValue}
            onValueChange={getEntities}
            onDeleteText={() => {
              getEntities('');
            }}
            placeHolder={searchInputPlaceHolder}
          />
          <View style={styles.listContainer}>
            {!error ? (
              <>
                {!loading || loadingMoreEntities ? (
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={entities}
                    onEndReachedThreshold={0.00001}
                    onEndReached={loadMoreEntities}
                    refreshing={refreshing}
                    onRefresh={() => {
                      getEntities(inputValue, {refreshing: true}, true);
                    }}
                    keyExtractor={listKeyExtractor}
                    ListEmptyComponent={<NoResults />}
                    ListFooterComponent={
                      loadingMoreEntities && (
                        <View style={styles.footerIndicatorContainer}>
                          <LoadingIndicator
                            containerStyle={styles.footerLoadingIndicator}
                            version={2}
                          />
                        </View>
                      )
                    }
                    renderItem={renderEntity}
                  />
                ) : (
                  <View style={styles.loadingIndicator}>
                    <LoadingIndicator />
                  </View>
                )}
              </>
            ) : (
              <ConnectionError
                onRetry={() => {
                  retryFetch(api, updateState);
                }}
              />
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EntityListing;
