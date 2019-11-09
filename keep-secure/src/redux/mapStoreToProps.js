const mapStoreToProps = (reduxState) => {
    return {
        store: reduxState,
        // reduxState properties bound directly to "props"

        user: reduxState.user,
        loginMode: reduxState.loginMode,
        errors: reduxState.errors,
    }
}

export default mapStoreToProps;