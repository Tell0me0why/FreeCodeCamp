const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase()
}

export {uppercaseString, lowercaseString}

/* When you export a variable or function, you can import it in another file and use
 it without having to rewrite the code. You can export multiple things by repeating
 the first example for each thing you want to export, or by placing them all in the
 export statement of the second example, like this
 */