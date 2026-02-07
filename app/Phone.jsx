import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../style/loginstyle";
import ThemedTextInput from "../components/ThemedTextInput";
import { useState } from "react";
import { Link } from "expo-router";
import { validatePhoneOnly, validateOTP } from "../style/Validation";

export default function Phone() {
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [code, setCode] = useState("");
  const [otpErrors, setOtpErrors] = useState({});

  const handleRegister = () => {
    const validationErrors = validatePhoneOnly(phone); // ← هنا التعديل
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setShowPopup(true);
    }
  };

  const handleOTPConfirm = () => {
    const validationErrors = validateOTP(code);
    setOtpErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("تم التحقق من الرمز بنجاح");
      // هنا تقدر تنقل المستخدم لصفحة إعادة تعيين كلمة السر
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Text style={styles.inputlog2}>
        ادخل رقم الجوال{"\n"}لتعيين كلمة السر
      </Text>

      <View style={styles.box}>
        <ThemedTextInput
          placeholder="رقم الجوال"
          value={phone}
          onChangeText={setPhone}
        />
        {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>إرسال الرمز</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ textAlign: "center", fontSize: 16, color: "#00000080" }}>
        اعادة ارسال الرمز؟{" "}
        <Link href="/Phone" style={styles.forget}>
          خلال 60 ثانية
        </Link>
      </Text>

      {showPopup && (
        <View style={popupStyles.overlay}>
          <View style={popupStyles.popup}>
            <Text style={popupStyles.title}>أدخل رمز التحقق</Text>

            <TextInput
              style={popupStyles.codeInput}
              placeholder="••••"
              keyboardType="number-pad"
              maxLength={4}
              value={code}
              onChangeText={setCode}
            />

            {otpErrors.code && (
              <Text style={{ color: "red", marginBottom: 10 }}>
                {otpErrors.code}
              </Text>
            )}

            <TouchableOpacity style={popupStyles.confirmBtn} onPress={handleOTPConfirm}>
              <Text style={popupStyles.confirmText}>تأكيد</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowPopup(false)}>
              <Text style={popupStyles.closeText}>إغلاق</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const popupStyles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4B217F",
  },
  codeInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    width: "60%",
    textAlign: "center",
    fontSize: 24,
    paddingVertical: 10,
    marginBottom: 10,
  },
  confirmBtn: {
    backgroundColor: "#4B217F",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 10,
  },
  confirmText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  closeText: {
    color: "#4B217F",
    fontSize: 16,
    marginTop: 10,
  },
});