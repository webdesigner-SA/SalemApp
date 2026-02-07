import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // نص تسجيل الدخول  
  inputlog: {
    marginTop:20,
    marginLeft: 140,
    color: '#4B217F',
    justifyContent: "center",
    alignItems: "center",
    fontSize:20,
    fontWeight: "bold",
  },
inputlog2: {
    marginTop:180,
    marginLeft: 140,
    color: '#4B217F',
    justifyContent: "center",
    alignItems: "center",
    fontSize:20,
    fontWeight: "bold",
  },
  //  حقول الادخال
  box: {
  marginTop: 50,
  width: "100%",
  paddingHorizontal: 40,
},
  // نص نسيت كلمة المرور
  forget: {
    marginLeft: 250, 
    marginTop: 15, 
    color: '#CE3756',
    fontSize:16,
  },
  // زر تذكرني
  rememberRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    width:'90',
    marginBottom: 5,
    marginTop: 20,
    marginLeft: 300,
  },
  rememberText: {
    marginRight: 5,
    fontSize: 20,
    color: '#00000080',
    marginLeft: 12,
  },
  rememberSwitch: {
  transform: [{ scale: 0.9 }],
  marginRight: 10, 
},

  // زر انشاء حساب (تسجيل الدخول) 
  button: {
    backgroundColor: "#4B217F",
    marginTop:50,
    marginLeft: 110,
    width:'200',
    height: '56',
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    alignItems: "center",
    marginTop: 12,

  },
  // نص الخطأ
errorText: {
  color: "red",
  textAlign: "right",
  fontSize: 12,
  marginTop: 4,
},
});