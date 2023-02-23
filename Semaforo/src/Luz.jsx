export const Luz = ({ id, cor, ligado, nome, onClick }) => {
    return (
        <button className="sinalizacao__button" id={id} onClick={onClick} disabled={ligado}>
        <div>
            id={id}
            onClick={onClick}
            className={`sinalizacao__luz ${ligado ? "sinalizacao__luz--ligado" : ""}`} style={{ backgroundColor: cor }}
        </div>
        <span>Ligar cor {nome}</span>
        </button>
    )
}