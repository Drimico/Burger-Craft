interface BurgerNameInputProps {
    onChange: (name: string) => void
}
const BurgerNameInput = ({ onChange}: BurgerNameInputProps) => {
    return (
        <div>
            <input type="text" placeholder="Numele burgerului" onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}

export default BurgerNameInput
