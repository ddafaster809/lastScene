import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Divider} from 'react-native-elements';
import {textStyles} from '../../styles/main';

const SectionInfo = ({
  children,
  title,
  showDivider = true,
  contentStyle,
  containerStyle,
}) => (
  <>
    {showDivider && <Divider />}
    <View style={[styles.sectionContainer, containerStyle]}>
      <Text style={textStyles.label}>{title}:</Text>
      <View style={[styles.sectionContent, contentStyle]}>{children}</View>
    </View>
  </>
);

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 15,
    marginBottom: 15,
  },
  sectionContent: {
    marginTop: 10,
  },
});
export default SectionInfo;
