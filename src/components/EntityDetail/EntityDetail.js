import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Divider, Icon} from 'react-native-elements';
import ExternalImage from '../UI/ExternalImage';
import Faded from '../UI/Faded';
import {hp} from '../../util/helpers';
import styles from './styles';

const EntityDetail = ({
  backgroundImage,
  defaultBgImage,
  icon,
  title,
  infoTitle,
  infoSubtitle,
  infoCounting,
  type,
  children,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topComponent}>
        <View style={styles.darkBackground} />
        <ExternalImage
          style={styles.backgroundImage}
          imageUrl={backgroundImage}
          defaultImage={defaultBgImage}
        />
        <View style={styles.fadeContainer}>
          <Faded color="#000000" height={hp(13)} />
        </View>
      </View>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.flex}>
          <View style={styles.detailContainer}>
            <View style={styles.typeContainer}>
              <View style={[styles.typeDarkOpacity, styles.typeBorderRadius]} />
              <View style={styles.typeLabelContainer}>
                <Text numberOfLines={1} style={styles.typeLabel}>
                  {type}
                </Text>
              </View>
            </View>
            <View style={[styles.entityTitleContainer]}>
              <Text numberOfLines={2} style={styles.entityTitle}>
                {title}
              </Text>
            </View>
            <View style={styles.infoDetailContainer}>
              <View style={styles.infoIconContainer}>
                <Icon
                  size={24}
                  name={icon}
                  type="font-awesome-5"
                  color="#FFFFFF"
                />
              </View>
              <View style={styles.infoTitleContainer}>
                <Text numberOfLines={1} style={styles.infoTitle}>
                  {infoTitle}
                </Text>
                <Text style={styles.infoSubtitle}>{infoSubtitle}</Text>
              </View>
            </View>
          </View>
          <View style={styles.dividerContainer}>
            <Divider style={styles.divider} />
          </View>
          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{infoCounting}</Text>
          </View>
        </View>
        <View style={styles.contentBodyContainer}>
          <View style={styles.cardContainer}>{children}</View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EntityDetail;
