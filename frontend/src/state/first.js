import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    mode: "dark",
    user: {
        name: 'John Doe',
        avatar: 'https://i.seadn.io/gae/b91FFh2EPsExNTHHqECbEQsqDSgaBeOxYWIZfNeYdXfmBOIFPpbyB2VphB_6m_g5iu_ACtgA11X-64TsqWUtdv5x9fFzco4N7OzFYio?auto=format&dpr=1&w=1000',
    },
    token: null,
    selectedSideButton: null,
    selectedChat: null,
    chatList: [

        {
            "_id": "66f7f2980d10160b609fd41a",
            "chatDetails": {
                "_id": "66f7f2980d10160b609fd41a",
                "user1": null,
                "user2": null,
                "messages": [
                    [
                        "66f7f2bf0d10160b609fd422"
                    ],
                    [
                        "66f80512cd11a2ef232d1670"
                    ],
                    [
                        "66f8058b09a827d667ebe4d5"
                    ]
                ],
                "createdAt": "2024-09-28T12:12:08.591Z",
                "updatedAt": "2024-09-28T13:32:59.164Z",
                "__v": 3,
                "otherUser": {
                    "_id": "66f7f2660d10160b609fd415",
                    "name": "Jane Doe",
                    "avatar": "https://st2.depositphotos.com/9998432/48297/v/450/depositphotos_482974572-stock-illustration-default-avatar-photo-placeholder-grey.jpg"
                }
            },
            "messages": [
                {
                    "_id": "66f8058b09a827d667ebe4d5",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "????",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:32:59.074Z",
                    "createdAt": "2024-09-28T13:32:59.277Z",
                    "updatedAt": "2024-09-28T13:32:59.277Z",
                    "__v": 0
                },
                {
                    "_id": "66f80512cd11a2ef232d1670",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "ehh hi",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:30:58.814Z",
                    "createdAt": "2024-09-28T13:30:59.084Z",
                    "updatedAt": "2024-09-28T13:30:59.084Z",
                    "__v": 0
                },
                {
                    "_id": "66f7f2bf0d10160b609fd422",
                    "sender": "66f7f22e0d10160b609fd413",
                    "receiver": "66f7f2660d10160b609fd415",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "hi?",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T12:12:47.640Z",
                    "createdAt": "2024-09-28T12:12:48.005Z",
                    "updatedAt": "2024-09-28T12:12:48.005Z",
                    "__v": 0
                }
            ]
        },
        {
            "_id": "66f7f2980d10160b609fd41a",
            "chatDetails": {
                "_id": "66f7f2980d10160b609fd41a",
                "user1": null,
                "user2": null,
                "messages": [
                    [
                        "66f7f2bf0d10160b609fd422"
                    ],
                    [
                        "66f80512cd11a2ef232d1670"
                    ],
                    [
                        "66f8058b09a827d667ebe4d5"
                    ]
                ],
                "createdAt": "2024-09-28T12:12:08.591Z",
                "updatedAt": "2024-09-28T13:32:59.164Z",
                "__v": 3,
                "otherUser": {
                    "_id": "66f7f2660d10160b609fd415",
                    "name": "Jane Doe",
                    "avatar": "https://st2.depositphotos.com/9998432/48297/v/450/depositphotos_482974572-stock-illustration-default-avatar-photo-placeholder-grey.jpg"
                }
            },
            "messages": [
                {
                    "_id": "66f8058b09a827d667ebe4d5",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "????",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:32:59.074Z",
                    "createdAt": "2024-09-28T13:32:59.277Z",
                    "updatedAt": "2024-09-28T13:32:59.277Z",
                    "__v": 0
                },
                {
                    "_id": "66f80512cd11a2ef232d1670",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "ehh hi",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:30:58.814Z",
                    "createdAt": "2024-09-28T13:30:59.084Z",
                    "updatedAt": "2024-09-28T13:30:59.084Z",
                    "__v": 0
                },
                {
                    "_id": "66f7f2bf0d10160b609fd422",
                    "sender": "66f7f22e0d10160b609fd413",
                    "receiver": "66f7f2660d10160b609fd415",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "hi?",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T12:12:47.640Z",
                    "createdAt": "2024-09-28T12:12:48.005Z",
                    "updatedAt": "2024-09-28T12:12:48.005Z",
                    "__v": 0
                }
            ]
        },{
            "_id": "66f7f2980d10160b609fd41a",
            "chatDetails": {
                "_id": "66f7f2980d10160b609fd41a",
                "user1": null,
                "user2": null,
                "messages": [
                    [
                        "66f7f2bf0d10160b609fd422"
                    ],
                    [
                        "66f80512cd11a2ef232d1670"
                    ],
                    [
                        "66f8058b09a827d667ebe4d5"
                    ]
                ],
                "createdAt": "2024-09-28T12:12:08.591Z",
                "updatedAt": "2024-09-28T13:32:59.164Z",
                "__v": 3,
                "otherUser": {
                    "_id": "66f7f2660d10160b609fd415",
                    "name": "Jane Doe",
                    "avatar": "https://st2.depositphotos.com/9998432/48297/v/450/depositphotos_482974572-stock-illustration-default-avatar-photo-placeholder-grey.jpg"
                }
            },
            "messages": [
                {
                    "_id": "66f8058b09a827d667ebe4d5",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "????",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:32:59.074Z",
                    "createdAt": "2024-09-28T13:32:59.277Z",
                    "updatedAt": "2024-09-28T13:32:59.277Z",
                    "__v": 0
                },
                {
                    "_id": "66f80512cd11a2ef232d1670",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "ehh hi",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:30:58.814Z",
                    "createdAt": "2024-09-28T13:30:59.084Z",
                    "updatedAt": "2024-09-28T13:30:59.084Z",
                    "__v": 0
                },
                {
                    "_id": "66f7f2bf0d10160b609fd422",
                    "sender": "66f7f22e0d10160b609fd413",
                    "receiver": "66f7f2660d10160b609fd415",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "hi?",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T12:12:47.640Z",
                    "createdAt": "2024-09-28T12:12:48.005Z",
                    "updatedAt": "2024-09-28T12:12:48.005Z",
                    "__v": 0
                }
            ]
        },{
            "_id": "66f7f2980d10160b609fd41a",
            "chatDetails": {
                "_id": "66f7f2980d10160b609fd41a",
                "user1": null,
                "user2": null,
                "messages": [
                    [
                        "66f7f2bf0d10160b609fd422"
                    ],
                    [
                        "66f80512cd11a2ef232d1670"
                    ],
                    [
                        "66f8058b09a827d667ebe4d5"
                    ]
                ],
                "createdAt": "2024-09-28T12:12:08.591Z",
                "updatedAt": "2024-09-28T13:32:59.164Z",
                "__v": 3,
                "otherUser": {
                    "_id": "66f7f2660d10160b609fd415",
                    "name": "Jane Doe",
                    "avatar": "https://st2.depositphotos.com/9998432/48297/v/450/depositphotos_482974572-stock-illustration-default-avatar-photo-placeholder-grey.jpg"
                }
            },
            "messages": [
                {
                    "_id": "66f8058b09a827d667ebe4d5",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "????",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:32:59.074Z",
                    "createdAt": "2024-09-28T13:32:59.277Z",
                    "updatedAt": "2024-09-28T13:32:59.277Z",
                    "__v": 0
                },
                {
                    "_id": "66f80512cd11a2ef232d1670",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "ehh hi",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:30:58.814Z",
                    "createdAt": "2024-09-28T13:30:59.084Z",
                    "updatedAt": "2024-09-28T13:30:59.084Z",
                    "__v": 0
                },
                {
                    "_id": "66f7f2bf0d10160b609fd422",
                    "sender": "66f7f22e0d10160b609fd413",
                    "receiver": "66f7f2660d10160b609fd415",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "hi?",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T12:12:47.640Z",
                    "createdAt": "2024-09-28T12:12:48.005Z",
                    "updatedAt": "2024-09-28T12:12:48.005Z",
                    "__v": 0
                }
            ]
        }
        ,{
            "_id": "66f7f2980d10160b609fd41a",
            "chatDetails": {
                "_id": "66f7f2980d10160b609fd41a",
                "user1": null,
                "user2": null,
                "messages": [
                    [
                        "66f7f2bf0d10160b609fd422"
                    ],
                    [
                        "66f80512cd11a2ef232d1670"
                    ],
                    [
                        "66f8058b09a827d667ebe4d5"
                    ]
                ],
                "createdAt": "2024-09-28T12:12:08.591Z",
                "updatedAt": "2024-09-28T13:32:59.164Z",
                "__v": 3,
                "otherUser": {
                    "_id": "66f7f2660d10160b609fd415",
                    "name": "Jane Doe",
                    "avatar": "https://st2.depositphotos.com/9998432/48297/v/450/depositphotos_482974572-stock-illustration-default-avatar-photo-placeholder-grey.jpg"
                }
            },
            "messages": [
                {
                    "_id": "66f8058b09a827d667ebe4d5",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "????",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:32:59.074Z",
                    "createdAt": "2024-09-28T13:32:59.277Z",
                    "updatedAt": "2024-09-28T13:32:59.277Z",
                    "__v": 0
                },
                {
                    "_id": "66f80512cd11a2ef232d1670",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "ehh hi",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:30:58.814Z",
                    "createdAt": "2024-09-28T13:30:59.084Z",
                    "updatedAt": "2024-09-28T13:30:59.084Z",
                    "__v": 0
                },
                {
                    "_id": "66f7f2bf0d10160b609fd422",
                    "sender": "66f7f22e0d10160b609fd413",
                    "receiver": "66f7f2660d10160b609fd415",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "hi?",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T12:12:47.640Z",
                    "createdAt": "2024-09-28T12:12:48.005Z",
                    "updatedAt": "2024-09-28T12:12:48.005Z",
                    "__v": 0
                }
            ]
        }
        ,
        {
            "_id": "66f7f2980d10160b609fd41a",
            "chatDetails": {
                "_id": "66f7f2980d10160b609fd41a",
                "user1": null,
                "user2": null,
                "messages": [
                    [
                        "66f7f2bf0d10160b609fd422"
                    ],
                    [
                        "66f80512cd11a2ef232d1670"
                    ],
                    [
                        "66f8058b09a827d667ebe4d5"
                    ]
                ],
                "createdAt": "2024-09-28T12:12:08.591Z",
                "updatedAt": "2024-09-28T13:32:59.164Z",
                "__v": 3,
                "otherUser": {
                    "_id": "66f7f2660d10160b609fd415",
                    "name": "Jane Doe",
                    "avatar": "https://st2.depositphotos.com/9998432/48297/v/450/depositphotos_482974572-stock-illustration-default-avatar-photo-placeholder-grey.jpg"
                }
            },
            "messages": [
                {
                    "_id": "66f8058b09a827d667ebe4d5",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "????",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:32:59.074Z",
                    "createdAt": "2024-09-28T13:32:59.277Z",
                    "updatedAt": "2024-09-28T13:32:59.277Z",
                    "__v": 0
                },
                {
                    "_id": "66f80512cd11a2ef232d1670",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "ehh hi",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:30:58.814Z",
                    "createdAt": "2024-09-28T13:30:59.084Z",
                    "updatedAt": "2024-09-28T13:30:59.084Z",
                    "__v": 0
                },
                {
                    "_id": "66f7f2bf0d10160b609fd422",
                    "sender": "66f7f22e0d10160b609fd413",
                    "receiver": "66f7f2660d10160b609fd415",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "hi?",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T12:12:47.640Z",
                    "createdAt": "2024-09-28T12:12:48.005Z",
                    "updatedAt": "2024-09-28T12:12:48.005Z",
                    "__v": 0
                }
            ]
        },
        {
            "_id": "66f7f2980d10160b609fd41a",
            "chatDetails": {
                "_id": "66f7f2980d10160b609fd41a",
                "user1": null,
                "user2": null,
                "messages": [
                    [
                        "66f7f2bf0d10160b609fd422"
                    ],
                    [
                        "66f80512cd11a2ef232d1670"
                    ],
                    [
                        "66f8058b09a827d667ebe4d5"
                    ]
                ],
                "createdAt": "2024-09-28T12:12:08.591Z",
                "updatedAt": "2024-09-28T13:32:59.164Z",
                "__v": 3,
                "otherUser": {
                    "_id": "66f7f2660d10160b609fd415",
                    "name": "Jane Doe",
                    "avatar": "https://st2.depositphotos.com/9998432/48297/v/450/depositphotos_482974572-stock-illustration-default-avatar-photo-placeholder-grey.jpg"
                }
            },
            "messages": [
                {
                    "_id": "66f8058b09a827d667ebe4d5",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "????",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:32:59.074Z",
                    "createdAt": "2024-09-28T13:32:59.277Z",
                    "updatedAt": "2024-09-28T13:32:59.277Z",
                    "__v": 0
                },
                {
                    "_id": "66f80512cd11a2ef232d1670",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "ehh hi",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:30:58.814Z",
                    "createdAt": "2024-09-28T13:30:59.084Z",
                    "updatedAt": "2024-09-28T13:30:59.084Z",
                    "__v": 0
                },
                {
                    "_id": "66f7f2bf0d10160b609fd422",
                    "sender": "66f7f22e0d10160b609fd413",
                    "receiver": "66f7f2660d10160b609fd415",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "hi?",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T12:12:47.640Z",
                    "createdAt": "2024-09-28T12:12:48.005Z",
                    "updatedAt": "2024-09-28T12:12:48.005Z",
                    "__v": 0
                }
            ]
        },
        {
            "_id": "66f7f2980d10160b609fd41a",
            "chatDetails": {
                "_id": "66f7f2980d10160b609fd41a",
                "user1": null,
                "user2": null,
                "messages": [
                    [
                        "66f7f2bf0d10160b609fd422"
                    ],
                    [
                        "66f80512cd11a2ef232d1670"
                    ],
                    [
                        "66f8058b09a827d667ebe4d5"
                    ]
                ],
                "createdAt": "2024-09-28T12:12:08.591Z",
                "updatedAt": "2024-09-28T13:32:59.164Z",
                "__v": 3,
                "otherUser": {
                    "_id": "66f7f2660d10160b609fd415",
                    "name": "Jane Doe",
                    "avatar": "https://st2.depositphotos.com/9998432/48297/v/450/depositphotos_482974572-stock-illustration-default-avatar-photo-placeholder-grey.jpg"
                }
            },
            "messages": [
                {
                    "_id": "66f8058b09a827d667ebe4d5",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "????",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:32:59.074Z",
                    "createdAt": "2024-09-28T13:32:59.277Z",
                    "updatedAt": "2024-09-28T13:32:59.277Z",
                    "__v": 0
                },
                {
                    "_id": "66f80512cd11a2ef232d1670",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "ehh hi",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:30:58.814Z",
                    "createdAt": "2024-09-28T13:30:59.084Z",
                    "updatedAt": "2024-09-28T13:30:59.084Z",
                    "__v": 0
                },
                {
                    "_id": "66f7f2bf0d10160b609fd422",
                    "sender": "66f7f22e0d10160b609fd413",
                    "receiver": "66f7f2660d10160b609fd415",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "hi?",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T12:12:47.640Z",
                    "createdAt": "2024-09-28T12:12:48.005Z",
                    "updatedAt": "2024-09-28T12:12:48.005Z",
                    "__v": 0
                }
            ]
        },
        {
            "_id": "66f7f2980d10160b609fd41a",
            "chatDetails": {
                "_id": "66f7f2980d10160b609fd41a",
                "user1": null,
                "user2": null,
                "messages": [
                    [
                        "66f7f2bf0d10160b609fd422"
                    ],
                    [
                        "66f80512cd11a2ef232d1670"
                    ],
                    [
                        "66f8058b09a827d667ebe4d5"
                    ]
                ],
                "createdAt": "2024-09-28T12:12:08.591Z",
                "updatedAt": "2024-09-28T13:32:59.164Z",
                "__v": 3,
                "otherUser": {
                    "_id": "66f7f2660d10160b609fd415",
                    "name": "Jane Doe",
                    "avatar": "https://st2.depositphotos.com/9998432/48297/v/450/depositphotos_482974572-stock-illustration-default-avatar-photo-placeholder-grey.jpg"
                }
            },
            "messages": [
                {
                    "_id": "66f8058b09a827d667ebe4d5",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "????",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:32:59.074Z",
                    "createdAt": "2024-09-28T13:32:59.277Z",
                    "updatedAt": "2024-09-28T13:32:59.277Z",
                    "__v": 0
                },
                {
                    "_id": "66f80512cd11a2ef232d1670",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "ehh hi",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:30:58.814Z",
                    "createdAt": "2024-09-28T13:30:59.084Z",
                    "updatedAt": "2024-09-28T13:30:59.084Z",
                    "__v": 0
                },
                {
                    "_id": "66f7f2bf0d10160b609fd422",
                    "sender": "66f7f22e0d10160b609fd413",
                    "receiver": "66f7f2660d10160b609fd415",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "hi?",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T12:12:47.640Z",
                    "createdAt": "2024-09-28T12:12:48.005Z",
                    "updatedAt": "2024-09-28T12:12:48.005Z",
                    "__v": 0
                }
            ]
        },
        {
            "_id": "66f7f2980d10160b609fd41a",
            "chatDetails": {
                "_id": "66f7f2980d10160b609fd41a",
                "user1": null,
                "user2": null,
                "messages": [
                    [
                        "66f7f2bf0d10160b609fd422"
                    ],
                    [
                        "66f80512cd11a2ef232d1670"
                    ],
                    [
                        "66f8058b09a827d667ebe4d5"
                    ]
                ],
                "createdAt": "2024-09-28T12:12:08.591Z",
                "updatedAt": "2024-09-28T13:32:59.164Z",
                "__v": 3,
                "otherUser": {
                    "_id": "66f7f2660d10160b609fd415",
                    "name": "Jane Doe",
                    "avatar": "https://st2.depositphotos.com/9998432/48297/v/450/depositphotos_482974572-stock-illustration-default-avatar-photo-placeholder-grey.jpg"
                }
            },
            "messages": [
                {
                    "_id": "66f8058b09a827d667ebe4d5",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "????",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:32:59.074Z",
                    "createdAt": "2024-09-28T13:32:59.277Z",
                    "updatedAt": "2024-09-28T13:32:59.277Z",
                    "__v": 0
                },
                {
                    "_id": "66f80512cd11a2ef232d1670",
                    "sender": "66f7f2660d10160b609fd415",
                    "receiver": "66f7f22e0d10160b609fd413",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "ehh hi",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T13:30:58.814Z",
                    "createdAt": "2024-09-28T13:30:59.084Z",
                    "updatedAt": "2024-09-28T13:30:59.084Z",
                    "__v": 0
                },
                {
                    "_id": "66f7f2bf0d10160b609fd422",
                    "sender": "66f7f22e0d10160b609fd413",
                    "receiver": "66f7f2660d10160b609fd415",
                    "chat": "66f7f2980d10160b609fd41a",
                    "text": "hi?",
                    "media": [],
                    "seen": false,
                    "delivered": false,
                    "time": "2024-09-28T12:12:47.640Z",
                    "createdAt": "2024-09-28T12:12:48.005Z",
                    "updatedAt": "2024-09-28T12:12:48.005Z",
                    "__v": 0
                }
            ]
        }
        
    ]
}

export const firstSlice = createSlice({
    name: "firstSlice",
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload.mode
        },

        setLogin: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },
        updateUser: (state, action) => {

            state.user = {
                ...state.user,
                ...action.payload.data
            }

          
        },
        setLogout: (state) => {
            state.user = null
            state.token = null
        },
        setSelectedSideButton: (state, action) => {
            state.selectedSideButton = action.payload.index
        },
        setSelectedChat: (state, action) => {
            console.log(action.payload)
            state.selectedChat = action.payload.chat
        },
        setChatList: (state, action) => {
            state.chatList = action.payload.chatList
        },

    }
})

export const { setMode, setLogin,updateUser, setLogout, setSelectedSideButton, setSelectedChat, setChatList } = firstSlice.actions

export default firstSlice.reducer
