import { Text, View,StyleSheet, TextInput,TouchableOpacity,Switch,Image } from "react-native";
import { styles } from "../style/loginstyle";
import ThemedTextInput from "../components/ThemedTextInput";
import { useState } from "react";//
import { Link } from "expo-router";
import { validateRegister } from "../style/Validation";//
import { Stack } from "expo-router";//


export default function Register() {
  //Remember me 
  const [remember, setRemember] = useState(false);

//variables for the input fields   
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState({});

//validation function for the input fields
const handleRegister = () => {
  const validationErrors = validateRegister(name, phone, username, password);
  setErrors(validationErrors);
  if (Object.keys(validationErrors).length === 0) {
    // متابعة عملية التسجيل
    console.log("تم التسجيل بنجاح");
  }
};
  return (
   
<View style={{ flex: 1, backgroundColor: "#FFFFFF" }}> 


     <View style={styles.box}>
        <ThemedTextInput placeholder="الاسم" value={name} onChangeText={setName} />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>} 
    </View>

    <View style={styles.box}>
        <ThemedTextInput placeholder="رقم الجوال" value={phone} onChangeText={setPhone} />
      {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
    </View>

    <View style={styles.box}>
        <ThemedTextInput placeholder="اسم المستخدم" value={username} onChangeText={setUsername} />
        {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
    </View>

    <View style={styles.box}>
        <ThemedTextInput placeholder="كلمة السر" value={password} onChangeText={setPassword} secureTextEntry={true} />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
    </View>

{/* Remeber me */}
    <View style={styles.rememberRow}>
        <Switch
          value={remember}
          onValueChange={setRemember}
          style={styles.rememberSwitch}
          trackColor={{ false: "#ccc", true: "#4B217F" }}
           thumbColor={remember ? "#fff" : "#f4f3f4"}
        />
        <Text style={styles.rememberText}>تذكرني</Text>
      </View>

{/* Button to register */}
    <View>
      
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
      <Text style={styles.buttonText}>إنشاء حساب</Text>
      </TouchableOpacity>

    </View>

{/* Link to login page */}
    <Text style={{ textAlign: "center", fontSize: 16, color: "#00000080" }}>
  لديك حساب؟{" "}
     <Link href="/Login" style={styles.forget}>
    تسجيل الدخول
      </Link>
      </Text>

    </View>
  );
}