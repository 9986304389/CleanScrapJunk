import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BOTTOM_APPBAR_HEIGHT = 6;
const MEDIUM_FAB_SIZE = 56;

const MyComponent = () => {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Appbar
        style={[
          styles.bottom,
          {
            height: 'auto',
            backgroundColor: theme.colors.elevation.level2,
          },
        ]}
      >
        <Appbar.Action icon="archive" onPress={() => {}} />
        <Appbar.Action icon="email" onPress={() => {}} />
        <Appbar.Action icon="label" onPress={() => {}} />
        <Appbar.Action icon="delete" onPress={() => {}} />
      </Appbar>
      <FAB
        icon="plus"
        onPress={() => {}}
        style={[
          styles.fab,
          {
            bottom: bottom + 16,
            right: 16,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: 'absolute',
  },
});

export default MyComponent;
