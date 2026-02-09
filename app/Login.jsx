import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../style/loginstyle";
import ThemedTextInput from "../components/ThemedTextInput";
import { Link } from "expo-router";
import { useState } from "react";
import { validateLogin } from "../style/Validation"; 
 import { FontAwesome } from '@expo/vector-icons';




export default function Home() {
{/*validation */}
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = () => {
    const validationErrors = validateLogin(username, password);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("تم تسجيل الدخول بنجاح");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
     
    <View style={styles.container}>

      <Text style={styles.inputlog}>تسجيل الدخول</Text>

    <View style={styles.containerCardLogin}>

      <View style={styles.box}>
        <ThemedTextInput
          placeholder="اسم المستخدم"
          value={username}
          onChangeText={setUsername}
        />
        {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
      </View>

      <View style={styles.box}>
        <ThemedTextInput
          placeholder="كلمة السر"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
      </View>

      <Text style={styles.forget}>
        <Link href="/Phone">نسيت كلمة السر؟
        </Link></Text>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>تسجيل الدخول</Text>
      </TouchableOpacity>

      <Text style={{ textAlign: "center", fontSize: 16, color: "#00000080" }}>
        ليس لديك حساب؟{" "}
        <Link href="/Register" style={styles.forget}>
           سجل الآن
        </Link>
      </Text>

    </View>
    
    </View>

    </View>
  );
}