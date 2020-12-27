//react-native
import { Card, Title, Surface } from "react-native-paper";
import { StyleSheet } from "react-native";

//react

import React from "react";

//styles
import { TripImage } from "./styles";

//observer
import { observer } from "mobx-react";
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import { TouchableOpacity } from "react-native";

const TripItem = ({ trip, navigation }) => {
  let screenItem = "";
  if (authStore.user) {
    if (authStore.user.id === trip.userId) {
      screenItem = (
        <>
          <Title onPress={() => tripStore.deleteTrip(trip.id)}>🗑</Title>
        </>
      );
    }
  } else screenItem = "";
  return (
    <>
      {/* {trip.userId === authStore.user.id && (
        <IconStyle
          name="EditOutlined"
          type="antdesign"
          onPress={() => navigation.navigate("EditTripScreen", { trip: trip })}
        />
      )} */}

      <Card>
        <TouchableOpacity
          onPress={() => navigation.navigate("TripDetail", { trip: trip })}
        >
          <Card.Cover source={{ uri: trip.image }} />
        </TouchableOpacity>
        <Surface style={styles.surface}>
          <Title>{trip.title}</Title>
          <Title>By: {trip.user.username}</Title>
          <Title>{screenItem}</Title>
        </Surface>
      </Card>
    </>
  );
};

export default observer(TripItem);

const styles = StyleSheet.create({
  surface: {
    padding: 8,
  },
});
