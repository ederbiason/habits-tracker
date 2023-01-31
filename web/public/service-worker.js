self.addEventListener('push', function (event) {
    const body = event.edata?.text() ?? ''

    event.waitUntil(
        self.registration.showNotification('Habits', {
            body
        })
    )
})