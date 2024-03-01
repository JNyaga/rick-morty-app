const getStatusColor = (status: string) => {
    switch (status) {
        case 'Alive':
            return 'text-green-500';
        case 'Dead':
            return 'text-red-500';
        case 'unknown':
            return 'text-gray-500';
        default:
            return 'text-gray-500';
    }
};

export default getStatusColor;