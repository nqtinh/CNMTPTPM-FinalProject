var axios = require('axios');
var block = require('../../models/blocks');
const getData1 = async (i) => {
    try {
        return await axios.get('https://komodo.forest.network/block?height=' + i)
    } catch (error) {
        console.log("loi roi")
    }
}
exports.saveBlock = async () => {
    const response = await axios.get('https://fox.forest.network/abci_info');
    let curheight = response.data.result.response.last_block_height;
    //console.log(curheight);
    const data = await block.find({}).sort({ height: -1 });
    let i = data[0].height+1;
    let arr = [];
    for (i; i <= curheight; i++) {
        arr.push(new Promise(async (resolve) => {
            const blocks = await getData1(i);
            const blockData = blocks.data.result;
            const block = new Block({
                height: blockData.block.header.height,
                time: blockData.block.header.time,
                txs: blockData.block.data.txs,
                hash: blockData.block_meta.block_id.hash,
                appHash: blockData.block.header.app_hash,
            })
            if (blockData.block.data.txs != null) {
               try {
                const a = await block.save();
               } catch (error) {
                   console.log(error);
               }
            }
            resolve("test");
        }));
    }
    console.log("Tạo full block");
    const result = await Promise.all(arr);
    console.log(result);
    return result;

}



