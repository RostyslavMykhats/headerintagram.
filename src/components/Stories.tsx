import React from 'react';
import { FlatList, Image, View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { storiesData, StoryItem as StoryItemType } from '@/utils/storiesData';

interface StoryItemProps {
  item: StoryItemType;
}

const StoryItem: React.FC<StoryItemProps> = ({ item }) => {
  const getBorderContent = () => {
    if (item.isOwn) return null;

    if (item.viewed) {
      return (
        <View style={[styles.gradientBorder, styles.viewedBorder]}>
          <Image source={{ uri: item.image }} style={styles.storyImage} />
        </View>
      );
    }

    return (
      <LinearGradient
        colors={['#fdf497', '#fdf497', '#fd5949', '#d6249f', '#285AEB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBorder}
      >
        <View style={styles.imageInnerContainer}>
          <Image source={{ uri: item.image }} style={styles.storyImage} />
        </View>
      </LinearGradient>
    );
  };

  return (
    <View style={styles.storyItem}>
      <View style={styles.imageContainer}>
        {getBorderContent()}
        {item.isOwn && (
          <>
            <View style={[styles.gradientBorder, styles.ownStory]}>
              <Image source={{ uri: item.image }} style={styles.storyImage} />
            </View>
            <View style={styles.addButton}>
              <Text style={styles.plusText}>+</Text>
            </View>
          </>
        )}
      </View>
      <Text
        style={item.viewed || item.isOwn ? { ...styles.username, color: '#757575ff' } : styles.username}
        numberOfLines={1}
      >
        {item.username}
      </Text>
    </View>
  );
};

export const Stories: React.FC = () => {
  return (
    <FlatList
      data={storiesData}
      renderItem={({ item }) => <StoryItem item={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.storiesContainer}
      decelerationRate="fast"
      snapToAlignment="start"
    />
  );
};

const styles = StyleSheet.create({
  storiesContainer: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    gap: 16,
  },
  storyItem: {
    alignItems: 'center',
    width: 74,
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientBorder: {
    width: 66,
    height: 66,
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1.5,
  },
  imageInnerContainer: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewedBorder: {
    borderWidth: 1.5,
    borderColor: '#dbdbdb',
  },
  ownStory: {
    borderWidth: 1.5,
    borderColor: '#dbdbdb',
  },
  storyImage: {
    width: 58,
    height: 58,
    borderRadius: 29,
  },
  addButton: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: '#000000ff',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    zIndex: 10,
  },
  plusText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: -1,
  },
  username: {
    marginTop: 4,
    fontSize: 11,
    textAlign: 'center',
    maxWidth: 70,
  },
});
