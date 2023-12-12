import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';

const FontLoader = ({ children }) => {
  const [fontsLoaded] = useFonts({
    'Lato-Regular': require('../../../assets/fonts/Lato-Regular.ttf'),
    // Adicione outras fontes conforme necessário
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      //await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <>{children}</>;
};

export default FontLoader;
