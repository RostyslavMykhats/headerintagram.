export interface StoryItem {
  id: string;
  username: string;
  image: string;
  isOwn: boolean;
  hasNewStory: boolean;
  viewed?: boolean;
}

export const storiesData: StoryItem[] = [
  { 
    id: '1', 
    username: 'Ваша розповідь', 
    image: 'https://picsum.photos/60',
    isOwn: true,
    hasNewStory: true
  },
  { 
    id: '2', 
    username: 'Другий', 
    image: 'https://picsum.photos/61',
    isOwn: false,
    hasNewStory: true,
    viewed: false
  },
  { 
    id: '3', 
    username: 'Третій', 
    image: 'https://picsum.photos/62',
    isOwn: false,
    hasNewStory: true,
    viewed: false
  },
  { 
    id: '4', 
    username: 'Четвертий', 
    image: 'https://picsum.photos/63',
    isOwn: false,
    hasNewStory: false,
    viewed: true
  },
  { 
    id: '5', 
    username: 'П\'ятий', 
    image: 'https://picsum.photos/64',
    isOwn: false,
    hasNewStory: true,
    viewed: false
  },
  { 
    id: '6', 
    username: 'Шостий', 
    image: 'https://picsum.photos/65',
    isOwn: false,
    hasNewStory: false,
    viewed: true
  },
  { 
    id: '7', 
    username: 'Сьомий', 
    image: 'https://picsum.photos/66',
    isOwn: false,
    hasNewStory: true,
    viewed: false
  },
];
