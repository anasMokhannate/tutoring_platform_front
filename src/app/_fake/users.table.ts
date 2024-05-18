export class UsersTable {
  public static users: any = [

    {
      id: 2,
      username: 'user',
      password: 'demo',
      email: 'user@demo.com',
      authToken: 'auth-token-6829bba69dd3421d8762-991e9e806dbf',
      refreshToken: 'auth-token-f8e4c61a318e4d618b6c199ef96b9e55',
      roles: [2], // Manager
      pic: './assets/media/avatars/image.jpg',
      fullname: 'John Doe',
      firstname: 'John',
      lastname: 'Doe',
      occupation: 'Student',
      phone: '+1234567890',
      language: 'en',
      communication: {
        email: true,
        sms: true,
        phone: false,
      },
      emailSettings: {
        emailNotification: true,
        sendCopyToPersonalEmail: false,
        activityRelatesEmail: {
          youHaveNewNotifications: false,
          youAreSentADirectMessage: false,
          someoneAddsYouAsAsAConnection: true,
          uponNewOrder: false,
          newMembershipApproval: false,
          memberRegistration: true,
        },
        updatesFromKeenthemes: {
          newsAboutKeenthemesProductsAndFeatureUpdates: false,
          tipsOnGettingMoreOutOfKeen: false,
          thingsYouMissedSindeYouLastLoggedIntoKeen: true,
          newsAboutMetronicOnPartnerProductsAndOtherServices: true,
          tipsOnMetronicBusinessProducts: true,
        },
      },
      address: {
        addressLine: '3487  Ingram Road',
        city: 'Greensboro',
        state: 'North Carolina',
        postCode: '27409',
      },
      socialNetworks: {
        linkedIn: 'https://linkedin.com/user',
        facebook: 'https://facebook.com/user',
        twitter: 'https://twitter.com/user',
        instagram: 'https://instagram.com/user',
      },
    }
  ];

  public static tokens: any = [
    {
      id: 1,
      authToken: 'auth-token-' + Math.random(),
      refreshToken: 'auth-token-' + Math.random(),
    },
  ];
}
