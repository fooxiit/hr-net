import STRING from './STRING';
type HeaderProps = {
    pageTitle: string;
};

export default function Header({ pageTitle }: HeaderProps) {
    return (
        <header>
            <span>{STRING.LOGO}</span>
            <h1>{pageTitle}</h1>
        </header>
    );
}
