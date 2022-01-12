import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Overlay, Icon, Divider} from 'react-native-elements';
import ExternalImage from '../UI/ExternalImage';
import {textStyles} from '../../styles/main';
import styles from './styles';
import {formatDate} from '../../util/helpers';
import RenderHtmlText from '../UI/RenderHtmlText';

const EpisodeOverlay = ({isVisible, onBackdropPress, episode}) => {
  return (
    <Overlay
      overlayStyle={styles.overlay}
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}>
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <Icon size={18} name="video" type="font-awesome-5" color="#E52F6F" />
        </View>

        <Text style={styles.title}>Episode #{episode?.number}</Text>
      </View>
      <Divider />
      <ScrollView style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <ExternalImage
            style={styles.image}
            imageUrl={episode?.image?.original}
            defaultImage={require('../../../assets/images/notAvailable.png')}
          />
        </View>
        <View style={styles.infoContainer}>
          <LabelWithValue label={'Episode Name'} value={episode?.name} />
          <LabelWithValue
            label={'Season'}
            value={`Season #${episode?.season}`}
          />
          <LabelWithValue
            label={'Air Date'}
            value={formatDate(episode?.airdate)}
          />
          <View style={styles.summaryContainer}>
            <Text style={textStyles.label}>Summary:</Text>
            <RenderHtmlText html={episode?.summary} />
          </View>
        </View>
      </ScrollView>
    </Overlay>
  );
};

const LabelWithValue = ({label, value}) => (
  <View style={styles.valueLabelContainer}>
    <Text style={textStyles.label}>{label}:</Text>
    <Text style={textStyles.valueLabel}>{value}</Text>
  </View>
);

export default EpisodeOverlay;
