import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import EntityCard from '../../components/UI/EntityCard/EntityCard';
import Header from '../../components/UI/Header';
import LoadingIndicator from '../../components/UI/LoadingIndicator';
import SearchInput from '../../components/UI/SearchInput';
import useController, {getShowProp} from './controller';
import {formatDate} from '../../util/helpers';
import {text} from '../../styles/main';

const Series = () => {
  const [{inputValue}, {filterShows}, {loading, data, error}] = useController();
  return (
    <TouchableWithoutFeedback
    touchSoundDisabled={true}
      onPress={() => {
        Keyboard.dismiss();
      }}
      style={{flex: 1, width: '100%'}}>
      <View style={{flex: 1, width: '100%'}}>
        <Header title="Series" />
        <View style={{paddingHorizontal: 13, flex: 1}}>
          <SearchInput
            value={inputValue}
            onValueChange={filterShows}
            placeHolder={'Search your series by name'}
          />
          <View style={{marginTop: 20, flex: 1}}>
            {!loading ? (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={item => {
                  const {id} = getShowProp(item);
                  return String(id);
                }}
                renderItem={({item}) => {
                  const show = getShowProp(item);
                  const genre = !!show?.genres[0] && show?.genres[0];
                  return (
                    <View style={{marginBottom: 10}}>
                      <EntityCard
                        title={show?.name}
                        photo={show?.image?.original} />
                        {/* <Text style={text.cardSubtitles}>
                          {genre ?? 'Other'}
                        </Text>
                        <Text style={text.cardSubtitles}>
                          Premiered: {formatDate(show?.premiered)}
                        </Text>
                      </EntityCard> */}
                    </View>
                  );
                }}
              />
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <LoadingIndicator />
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Series;
