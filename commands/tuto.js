function tuto(client, message, args, pics)
	{

	let lista = [' '];
	lista.push(`${pics[1]}`);
	lista.push(`${pics[2]}`);
	lista.push(`${pics[3]}`);
	lista.push(`${pics[4]}`);
	lista.push(`${pics[5]}`);
	lista.push(`${pics[6]}`);
	lista.push(`${pics[7]}`);
	lista.push(`${pics[8]}`);
	lista.push(`${pics[9]}`);
	lista.push(`${pics[0]}`);

	let actualtext = [' '];

	message.channel.send(lista.join(''));

	actualtext.push('Brushstroke Dice are coded d10s, each face representing a result');
	actualtext.push(`${pics[1]}`+'Black Jade counts as 1 hit with 1 involvement. Or 2 hits if max involvement.');
	actualtext.push(`${pics[5]}`+'Rose Jade counts as a blossom.');
	actualtext.push(`${pics[6]}`+'White Jade counts as 1 hit.');
	actualtext.push(`${pics[0]}`+'Pure Jade counts as 2 hits if **no** involvement, else *flows* or removes 1 involvement.');


	message.channel.send(actualtext.join('\n'));







}

module.exports = { 
tuto: tuto,
 


};