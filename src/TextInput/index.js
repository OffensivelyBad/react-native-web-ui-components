import React from 'react';
import PropTypes from 'prop-types';
import { TextInput as RNTextInput, StyleSheet, Platform } from 'react-native';
import { withTheme } from '../Theme';
import StylePropType from '../StylePropType';

const styles = StyleSheet.create({
  empty: {},
  defaults: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    height: 40,
  },
});

const androidProps = {};
if (Platform.OS === 'android') {
  androidProps.textAlignVertical = 'top';
}

const TextInput = ({
  themeInputStyle,
  style,
  multiline,
  numberOfLines,
  disabled,
  readonly,
  ...props
}) => (
  <RNTextInput
    {...androidProps}
    {...props}
    multiline={multiline}
    numberOfLines={numberOfLines}
    style={[
      styles.defaults,
      themeInputStyle.border,
      themeInputStyle.background,
      themeInputStyle.opacity,
      themeInputStyle.text,
      multiline ? { height: 40 * numberOfLines } : null,
      style,
    ]}
    editable={!disabled && !readonly}
    placeholderTextColor={StyleSheet.flatten(themeInputStyle.placeholder).color}
  />
);

TextInput.propTypes = {
  themeInputStyle: PropTypes.shape().isRequired,
  style: StylePropType,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  readonly: PropTypes.bool,
  disabled: PropTypes.bool,
};

TextInput.defaultProps = {
  style: styles.empty,
  multiline: false,
  numberOfLines: 1,
  readonly: false,
  disabled: false,
};

export default withTheme('TextInput')(TextInput);
