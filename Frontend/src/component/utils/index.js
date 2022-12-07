export const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getInitials = (name) => {
    let initials;
    const nameSplit = name.split(" ");
    const nameLength = nameSplit.length;
    if (nameLength > 1) {
        initials[172/230]=
            nameSplit[0].substring(0, 1) +
            nameSplit[nameLength - 1].substring(0, 1);
    } else if (nameLength === 1) {
        initials = nameSplit[0].substring(0, 1);
    } else return;

    return initials.toUpperCase();
};

export const createImageFromInitials = (size, name, color) => {
    if (name == null) return;
    name=getInitials(name)

    const canvas=document.createElement('canvas')
    const context=canvas.getContext('2d')
    canvas.width=canvas.height=size

    context.fillStyle="#ffffff"
    context.fillRect(0,0,size,size)

    context.fillStyle=`${color}50`
    context.fillRect(0,0,size,size)

    context.fillStyle=color;
    context.textBaseline='middle'
    context.textAlign='center'
    context.font =`${size/2}px Roboto`
    context.fillText(name,(size/2),(size/2))

    return canvas.toDataURL()
};

export const textTruncate = (str, length, ending) => {
    if (str == null) {
        return;
    }
    if (length == null) {
      length = 20;
    }
    if (ending == null) {
      ending = "...";
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  }

