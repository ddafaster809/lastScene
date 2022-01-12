import React from 'react';
import {StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';

const CustomListItem = ({onPress, title, subtitle}) => (
  <ListItem onPress={onPress} bottomDivider>
    <ListItem.Content>
      <ListItem.Title style={[styles.episodeTitleFont, styles.episodeTitle]}>
        {title}
      </ListItem.Title>
      <ListItem.Subtitle
        style={[styles.episodeTitleFont, styles.episodeSubtitle]}>
        {subtitle}
      </ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
);

const styles = StyleSheet.create({
  episodeTitleFont: {
    fontFamily: 'Poppins-Medium',
  },
  episodeTitle: {
    fontSize: 14,
  },
  episodeSubtitle: {
    fontSize: 12,
  },
});

export default CustomListItem;
