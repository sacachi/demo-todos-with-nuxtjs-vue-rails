export default function ({ store, redirect, route }) {
    // If the user is not authenticated
    var signed_in_redirect = ['user-login', 'user-sign_up'];
    if (store.state.user_id == null && !(signed_in_redirect.includes(route.name))) {
      return redirect('/user/login');
    }
    
    if (store.state.user_id !== null && (signed_in_redirect.includes(route.name))) {
      return redirect('/');
    }
  }