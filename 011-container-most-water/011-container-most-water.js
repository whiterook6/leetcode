const maxArea = (walls) => {
    if (walls.length < 2){
        return 0;
    } else if (walls.length === 2){
        return Math.min(walls[0], walls[1]);
    }

    let maxArea = 0;
    let left = 0;
    let right = walls.length - 1;
    while (right > left){
        const leftWall = walls[left];
        const rightWall = walls[right];
        const width = right - left;
        const area = width * Math.min(leftWall, rightWall);
        if (area > maxArea){
            maxArea = area;
        }

        if (leftWall < rightWall){
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}