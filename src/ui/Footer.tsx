export default function Footer() {
    return (
        <footer className="flex justify-center items-center mx-2 bg-white dark:bg-black border-t shadow-lg">
            <h1 className="text-white">&copy; {new Date().getFullYear()} DMKAS</h1>
        </footer>
    )
}