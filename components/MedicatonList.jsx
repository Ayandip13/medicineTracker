import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import EmptyState from "./EmptyState";
import { getDateRangeToDisplay } from "../service/ConvertDateTime";
import moment from "moment";
import Colors from "../Constants/Colors";
import { getLocalStorage } from "../service/Storage";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../configs/FirebaseConfig";
import MedicationCardItem from "./MedicationCardItem";

const MedicatonList = () => {
  const [medList, setMedList] = useState();
  const [dateRange, setDateRange] = useState();
  const [selectedDate, setSelectedDate] = useState(
    moment().format("MM/DD/YYYY")
  );

  useEffect(() => {
    GetDateRangeList();
    GetMedicationList(selectedDate);
  }, []);

  const GetDateRangeList = () => {
    const dateRange = getDateRangeToDisplay();
    setDateRange(dateRange);
  };

  const GetMedicationList = async (selectedDate) => {
    const user = await getLocalStorage("userDetail");
    try {
      const q = query(
        collection(db, "medication"),
        where("userEmail", "==", user?.email),
        where("dates", "array-contains", selectedDate)
      );
      const querySnapshot = await getDocs(q);
      setMedList([]);
      querySnapshot.forEach((doc) => {
        console.log("docId:" + "==>", doc.data());
        setMedList((prev) => [...prev, doc.data()]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ marginTop: 25 }}>
      <Image
        source={require("../assets/images/medi.jpg")}
        style={{ height: 200, width: "100%", borderRadius: 15 }}
      />

      <FlatList
        style={{ marginTop: 20 }}
        data={dateRange}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setSelectedDate(item.formattedDate)}
            style={[
              styles.dateGroup,
              {
                backgroundColor:
                  item.formattedDate == selectedDate
                    ? Colors.PRIMARY
                    : Colors.LIGHT_GRAY,
              },
            ]}
          >
            <Text
              style={[
                styles.day,
                {
                  color: item.formattedDate == selectedDate ? "white" : "black",
                },
              ]}
            >
              {item.day}
            </Text>
            <Text
              style={[
                styles.date,
                {
                  color: item.formattedDate == selectedDate ? "white" : "black",
                },
              ]}
            >
              {item.date}
            </Text>
          </TouchableOpacity>
        )}
      />

      <FlatList
        data={medList}
        renderItem={({ item, index }) => <MedicationCardItem medicine={item} />}
      />

      {/* <EmptyState /> */}
    </View>
  );
};

export default MedicatonList;

const styles = StyleSheet.create({
  dateGroup: {
    padding: 15,
    backgroundColor: "#B7B7B7",
    display: "flex",
    alignItems: "center",
    marginRight: 8,
    borderRadius: 10,
  },
  day: {
    fontSize: 18,
  },
  date: {
    fontSize: 27,
    fontWeight: "bold",
  },
});
