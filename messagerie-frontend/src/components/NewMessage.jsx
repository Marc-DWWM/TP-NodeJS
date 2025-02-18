import Item from "./Item";

const List = ({ tasks, onDeleteTask }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <Item key={index} task={task} onDelete={() => onDeleteTask(index)} />
            ))}
        </ul>
    );
};

export default NewMessage;