import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {TranslationContext} from '../../Context/TranslationContext/TranslationProvider';
import english from './english.json';
import turkish from './turkish.json';
import AsyncStoragePlugin from 'i18next-react-native-async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const setLanguage = async () => {
  try {
    const Languages = await AsyncStorage.getItem('@LANGUAGE');
    return Languages && i18next.changeLanguage(Languages);
  } catch (error) {
    console.log('Error ', error);
  }
};

i18next
  .use(initReactI18next)
  .use(AsyncStoragePlugin(setLanguage))
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: english,
      tr: turkish,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;
