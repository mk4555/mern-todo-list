import List from "../models/List.js";

export const getLists = async (req, res) => {
  try {
    const lists = await List.find();
    res.status(200).json(lists);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createList = (req, res) => {
  const list = req.body;
  const newList = new List(list);
  try {
    newList.save();
    res.status(201).json(newList);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateList = (req, res) => {
  console.log(req.body);
  List.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
};
