async function changeTaskStatus(subjectCode, taskId, status) {
    await fetch(`/api/materia/${subjectCode}/tarefa/${taskId}/status`, {
        method: "PUT",	
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
    });
}

export default changeTaskStatus;