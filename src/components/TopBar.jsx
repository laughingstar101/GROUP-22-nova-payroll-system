import logoImg from '../assets/logo.png'

export default function TopBar() {
    return (
        <section className={`bg-primary-colour w-full flex justify-center pt-4 pb-4`}>
            <img src={logoImg} className="h-15" height='30'></img>
        </section>
    )
}