import { View, Text, Image } from 'react-native'
import style from '../../assets/styles/login.styles'
import { useState } from 'react';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLoding = () => {

    }

    return (
        <View style={style.container}>
            {/* ILLUSTRATION */}
            <View style={style.topIllustration}>
                <Image
                    source={require('../../assets/images/i.png')}
                    style={style.illustrationImage}
                    resizeMode='contain'
                />
            </View>            
        </View>
    );
}