export interface MenuItem {
  id: string;
  name: string;
  japaneseName: string;
  category: "drink" | "food";
  price: number;
  description: string;
  image?: string;
  subText?: string;
}

export interface UserStampCard {
  userId: string;
  displayName: string;
  stampsCount: number; // 0 - 10
  lastUpdated: any; // Timestamp or string
}

export interface Reservation {
  id?: string;
  userId: string;
  userName: string;
  userEmail: string;
  date: string;
  time: string;
  guestsCount: number;
  specialRequests?: string;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: any;
}

export interface FavoriteDrink {
  id: string; // userId_menuItemId
  userId: string;
  menuItemId: string;
  createdAt: any;
}
