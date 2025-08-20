import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Pressable } from "react-native";
import { Svg, Path } from "react-native-svg";

import { HeartIcon, SendIcon, FollowingIcon, FavoritesIcon } from "@/assets/Icons/HeaderIcons";

export const InstagramHeader: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const options = [
    { id: "following", label: "Відстежуються", icon: FollowingIcon },
    { id: "favorites", label: "Вибране", icon: FavoritesIcon },
  ];

  const handleOptionSelect = (optionLabel: string) => {
    setIsModalVisible(false);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.logoButton}
          onPress={() => setIsModalVisible(!isModalVisible)}
        >
          <Text style={styles.logoText}>Instagram</Text>
        </TouchableOpacity>

        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <HeartIcon />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <SendIcon />
          </TouchableOpacity>
        </View>
      </View>

      {/* Custom Modal */}
     {isModalVisible && (
  <View style={styles.modalWrapper}>
    {/* Overlay */}
    <Pressable style={styles.modalOverlay} onPress={closeModal} />

    {/* Modal content */}
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        {options.map((option) => {
          const IconComponent = option.icon;
          return (
            <TouchableOpacity
              key={option.id}
              style={styles.optionButton}
              onPress={() => handleOptionSelect(option.label)}
            >
              <IconComponent />
              <Text style={styles.optionText}>{option.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  </View>
)}

    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    zIndex: 1000,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  logoButton: {
    padding: 4,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  rightIcons: {
    flexDirection: "row",
    gap: 16,
  },
  iconButton: {
    padding: 6,
    borderRadius: 20,
  },
  modalContent: {
    backgroundColor: "#fffffff1",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 5.84,
    elevation: 2,
    overflow: 'hidden',
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 12,
  },
  optionText: {
    fontSize: 14,
    color: "#262626",
    fontWeight: "400",
  },
  modalWrapper: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
},
modalOverlay: {
  flex: 1,
  backgroundColor: 'transparent',
},
modalContainer: {
  position: 'absolute',
  top: '101%',
  left: 16,
  width: '50%',
  zIndex: 1001,
},

});