import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

export const useEntityNavigation = (entityName, routeName) => {
  const navigation = useNavigation();
  const onEntityNavigation = useCallback(entity => {
    navigation.navigate(routeName, {
      [entityName]: entity,
    });
  }, []);
  return onEntityNavigation;
};
