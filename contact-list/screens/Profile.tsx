import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import ContactThumbnail from "../components/ContactThumbnail";
import DetailListItem from "../components/DetailListItem";
import { MappedContact, StoreState } from "../utils/types";
import colors from "../utils/colors";
import store from "../store";

interface Props {
  route: {
    params: {
      id: string;
    };
  };
}

export default class Profile extends React.Component<Props, StoreState> {
  state: StoreState = store.getState();

  render() {
    const { id } = this.props.route.params;
    const { avatar, name, email, phone, cell } = this.state.contacts.find(
      contact => contact.id === id
    ) as MappedContact;

    return (
      <View style={styles.container}>
        <View style={styles.avatarSection}>
          <ContactThumbnail avatar={avatar} name={name} phone={phone} />
        </View>
        <View style={styles.detailsSection}>
          <DetailListItem icon="mail" title="Email" subtitle={email} />
          <DetailListItem icon="phone" title="Work" subtitle={phone} />
          <DetailListItem icon="smartphone" title="Personal" subtitle={cell} />
        </View>
      </View>
    );
  }
}

interface Style {
  container: ViewStyle;
  avatarSection: ViewStyle;
  detailsSection: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1
  },
  avatarSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue
  },
  detailsSection: {
    flex: 1,
    backgroundColor: "white"
  }
});
