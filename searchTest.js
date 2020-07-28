import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

const products = [
  { id: "1", title: "süt", description: "çok yararlı", },
  { id: "2", title: "kola", description: "böcek içerir", },
  { id: "3", title: "baklava", description: "yüksek kalorili, çok şekerli", },
  { id: "63", title: "et", description: "çok pahalı ve protein içerir", },
  { id: "4", title: "ekmek", description: "60% ekmek", },
  { id: "5", title: "lays", description: "80% hava", },
]

export default class subscribe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInputValue: ""
    }
  }
  render() {
    const { searchInputValue } = this.state;
    return (
      <View>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#000"
          onChangeText={(text) => this.setState({ searchInputValue: text })}
          style={{ borderWidth: 1, borderColor: '#ccc', width: "70%", borderRadius: 10, marginTop: 20, alignSelf: 'center', padding: 10, color: '#000'}} />
        {
          products.filter((data) => data.description.includes(searchInputValue) || data.title.includes(searchInputValue)).map((item, index) => {
            return (
              <View
                style={{ borderWidth: 1, margin: 10}}
                key={item.id}>
                <Text> { item.title } </Text>
                <Text> { item.description } </Text>
              </View>
            )
          })
        }
      </View>
    )
  }
}

// import React from 'react';
// import { AppRegistry, StyleSheet, View, Text } from 'react-native';
// import appleAuth, {
//   AppleButton,
//   AppleAuthError,
//   AppleAuthRequestScope,
//   AppleAuthRealUserStatus,
//   AppleAuthCredentialState,
//   AppleAuthRequestOperation,
// } from '@invertase/react-native-apple-authentication';


// export default class Tester extends React.Component {
//   constructor() {
//     super();
//     this.authCredentialListener = null;
//     this.user = null;
//     this.state = {
//       credentialStateForUser: -1,
//     }
//   }
//   componentDidMount() {
//     /**
//      * subscribe to credential updates.This returns a function which can be used to remove the event listener
//      * when the component unmounts.
//      */
//     this.authCredentialListener = appleAuth.onCredentialRevoked(async () => {
//       console.warn('Credential Revoked');
//       this.fetchAndUpdateCredentialState().catch(error =>
//         this.setState({ credentialStateForUser: `Error: ${error.code}` }),
//       );
//     });

//     this.fetchAndUpdateCredentialState()
//       .then(res => this.setState({ credentialStateForUser: res }))
//       .catch(error => this.setState({ credentialStateForUser: `Error: ${error.code}` }))
//   }

//   componentWillUnmount() {
//     /**
//      * cleans up event listener
//      */
//     this.authCredentialListener();
//   }

//   signIn = async () => {
//     console.warn('Beginning Apple Authentication');

//     // start a login request
//     try {
//       const appleAuthRequestResponse = await appleAuth.performRequest({
//         requestedOperation: AppleAuthRequestOperation.LOGIN,
//         requestedScopes: [
//           AppleAuthRequestScope.EMAIL,
//           AppleAuthRequestScope.FULL_NAME,
//         ],
//       });

//       console.log('appleAuthRequestResponse', appleAuthRequestResponse);

//       const {
//         user: newUser,
//         email,
//         nonce,
//         identityToken,
//         realUserStatus /* etc */,
//       } = appleAuthRequestResponse;

//       this.user = newUser;

//       this.fetchAndUpdateCredentialState()
//         .then(res => this.setState({ credentialStateForUser: res }))
//         .catch(error =>
//           this.setState({ credentialStateForUser: `Error: ${error.code}` }),
//         );

//       if (identityToken) {
//         // e.g. sign in with Firebase Auth using `nonce` & `identityToken`
//         console.log(nonce, identityToken);
//       } else {
//         // no token - failed sign-in?
//       }

//       if (realUserStatus === AppleAuthRealUserStatus.LIKELY_REAL) {
//         console.log("I'm a real person!");
//       }

//       console.warn(`Apple Authentication Completed, ${this.user}, ${email}`);
//     } catch (error) {
//       if (error.code === AppleAuthError.CANCELED) {
//         console.warn('User canceled Apple Sign in.');
//       } else {
//         console.error(error);
//       }
//     }
//   };

//   fetchAndUpdateCredentialState = async () => {
//     if (this.user === null) {
//       this.setState({ credentialStateForUser: 'N/A' });
//     } else {
//       const credentialState = await appleAuth.getCredentialStateForUser(this.user);
//       if (credentialState === AppleAuthCredentialState.AUTHORIZED) {
//         this.setState({ credentialStateForUser: 'AUTHORIZED' });
//       } else {
//         this.setState({ credentialStateForUser: credentialState });
//       }
//     }
//   }

//   render() {
//     return (
//       <View style={[styles.container, styles.horizontal]}>
//         <Text style={styles.header}>Credential State</Text>
//         <Text>{this.state.credentialStateForUser}</Text>
//         <Text style={styles.header}>Buttons</Text>
//         <Text>Continue Styles</Text>
//         <AppleButton
//           style={styles.appleButton}
//           cornerRadius={5}
//           buttonStyle={AppleButton.Style.WHITE}
//           buttonType={AppleButton.Type.CONTINUE}
//           onPress={() => this.signIn()}
//         />
//         <AppleButton
//           style={styles.appleButton}
//           cornerRadius={5}
//           buttonStyle={AppleButton.Style.WHITE_OUTLINE}
//           buttonType={AppleButton.Type.CONTINUE}
//           onPress={() => this.signIn()}
//         />
//         <AppleButton
//           style={styles.appleButton}
//           cornerRadius={5}
//           buttonStyle={AppleButton.Style.BLACK}
//           buttonType={AppleButton.Type.CONTINUE}
//           onPress={() => this.signIn()}
//         />
//         <Text>Sign-in Styles</Text>
//         <AppleButton
//           style={styles.appleButton}
//           cornerRadius={5}
//           buttonStyle={AppleButton.Style.WHITE}
//           buttonType={AppleButton.Type.SIGN_IN}
//           onPress={() => this.signIn()}
//         />
//         <AppleButton
//           style={styles.appleButton}
//           cornerRadius={5}
//           buttonStyle={AppleButton.Style.WHITE_OUTLINE}
//           buttonType={AppleButton.Type.SIGN_IN}
//           onPress={() => this.signIn()}
//         />
//         <AppleButton
//           style={styles.appleButton}
//           cornerRadius={5}
//           buttonStyle={AppleButton.Style.BLACK}
//           buttonType={AppleButton.Type.SIGN_IN}
//           onPress={() => this.signIn()}
//         />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   appleButton: {
//     width: 200,
//     height: 60,
//     margin: 10,
//   },
//   header: {
//     margin: 10,
//     marginTop: 30,
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'pink',
//   },
//   horizontal: {
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10,
//   },
// });