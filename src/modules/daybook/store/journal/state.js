
export default () =>({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text : 'Vivamus eget mollis sem. Sed eu vehicula mi. Duis odio est, consequat interdum magna ut, finibus efficitur felis. Pellentesque non purus erat. Nulla eu venenatis libero. Praesent ac fringilla quam. Mauris gravida laoreet eros, non hendrerit elit pulvinar vitae. Aliquam in commodo orci.',
            picture: null,
        },
        {
            id: new Date().getTime()+100,
            date: new Date().toDateString(),
            text : 'Vivamus eget mollis sem. Sed eu vehicula mi. Duis odio est, consequat interdum magna ut, finibus efficitur felis. Pellentesque non purus erat. Nulla eu venenatis libero. Praesent ac fringilla quam. Mauris gravida laoreet eros, non hendrerit elit pulvinar vitae. Aliquam in commodo orci.',
            picture: null,
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text : 'Vivamus eget mollis sem. Sed eu vehicula mi. Duis odio est, consequat interdum magna ut, finibus efficitur felis. Pellentesque non purus erat. Nulla eu venenatis libero. Praesent ac fringilla quam. Mauris gravida laoreet eros, non hendrerit elit pulvinar vitae. Aliquam in commodo orci.',
            picture: null,
        },
    ]
})
