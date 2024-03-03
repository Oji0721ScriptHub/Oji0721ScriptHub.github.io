function generateAndRedirect() {
    // Generate a random key with only capital letters and numbers, limited to 6 characters
    var key = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 6; i++) {
        key += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    // Redirect to the URL containing the generated key
    window.location.href = 'generated/?key=' + key;
}