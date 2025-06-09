export interface Message {
    id: number
    senderId: number
    senderUsername: string
    senderPhotoUrl: string
    recipientUsername: string
    recipientId: number
    recipientPhotoUrl: string
    content: string
    dateRead?: Date
    messageSent: Date
  }