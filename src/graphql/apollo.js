import ApolloClient, {
  // ApolloClient,
  ApolloLink,
  from,
  Observable,
  HttpLink,
  InMemoryCache,
} from 'apollo-boost'

// import { onError } from 'apollo-link-error'

// class AuthLink extends ApolloLink {
//   /* eslint-disable-next-line */
//   handleLogout(operation) {
//     const { authExpired, response } = operation.getContext()

//     if (response && response.redirected) {
//       const { url } = response
//       /* eslint-disable-next-line */
//       console.log(`The redirected url is ${url}`)
//     }

//     if (authExpired) {
//       /* eslint-disable-next-line */
//       console.log('logged out')
//     }
//   }

//   request(operation, forward) {
//     return new Observable((obs) => {
//       forward(operation).subscribe({
//         next: (data) => {
//           this.handleLogout(operation)
//           obs.next(data)
//         },
//         error: (err) => {
//           this.handleLogout(operation)
//           obs.next(err)
//         },
//         complete: obs.complete.bind(obs),
//       })
//     })
//   }
// }

// // const error = onError(({ operation, networkError, graphQLErrors }) => {
// //   const { response } = operation.getContext()
// //   // this is when you have mixed data + errors
// //   if (response && response.status === 401) {
// //     operation.setContext({ authExpired: true })
// //   }

// //   // this is from non mixed data or execution failure
// //   // i.e. { errors } where no { data } field is present
// //   if (networkError && networkError.statusCode === 401) {
// //     operation.setContext({ authExpired: true })
// //   }
// // })

// const auth = new AuthLink()
// const http = new HttpLink({ uri: 'https://gql.now.sh/' })
// const link = from([auth, http])

const client = new ApolloClient({
  uri: 'https://gql.now.sh/',
  // link,
  // cache: new InMemoryCache(),
})

export default client
