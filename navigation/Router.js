import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppStack, AuthStack } from './AppStack';

const Router = () => {

    const [isLogin, setIsLogin] = React.useState(false);

    return (
        <NavigationContainer>
            {isLogin ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default Router;