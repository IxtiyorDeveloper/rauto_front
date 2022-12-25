import React, {useEffect, useState} from 'react';
import {Button, Form, Image, Input, Row, Select} from 'antd';
import "./update_car.css"
import AdminHeader from "../../components/admin_header/admin_header";
import axios from "axios";
import {MainApi} from "../../api";
import {toast} from "react-toastify";
import {useParams} from "react-router";
import {fields} from "../../components/add_card_form/fields";
import {Editor} from "react-draft-wysiwyg";
import {ContentState, convertToRaw, EditorState} from "draft-js";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";

function UpdateCar() {
    const {id} = useParams()

    const [form] = Form.useForm()
    const {Option} = Select
    const [op1, setOp1] = useState("")
    const [op2, setOp2] = useState("")
    const [data, setData] = useState({})
    const [imgs, setImgs] = useState([])
    const [imgs1, setImgs1] = useState([])

    const {lang} = useSelector(state => state.lang)
    const {
        model,
        marka1,
        color1,
        color2,
        year,
        dv,
        yq,
        yqr,
        trans,
        transr,
        kuzuv,
        kuzuvru,
        opisaniyaru,
        opisaniya,
        perevod,
        perevodru,
        yurgani,
        narxi,
        aksiya,
        status,
        save,
        success,
        req
    } = Language;

    useEffect(() => {
        if (!!id)
            axios.get(`${MainApi}/car/${id}`).then(res => {
                form.setFieldsValue(res?.data?.data)
                setData(res?.data?.data)
            })
    }, [id])

    const onFinish = (values) => {
        const formData = new FormData()
        Object.keys(values).forEach(
            key =>
                key !== 'photo' &&
                key !== 'opisaniya' &&
                key !== 'opisaniyaru' &&
                formData.append(key, values[key])
        )

        formData.append("opisaniya", op1)
        formData.append("opisaniyaru", op2)
        if (!!imgs1.length)
            imgs1.forEach(file => formData.append('photo', file))
        axios.put(`${MainApi}/car/${id}`, formData).then(res => {
            toast.success(success[lang])
        }).catch(er => console.log(er))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const field = fields.find(i => i.key === "madel")

    const [editorState1, setEditorState1] = useState();
    const [editorState2, setEditorState2] = useState();

    const onEditorStateChange1 = (editorState) => {
        setEditorState1(editorState)
        setOp1(draftToHtml(convertToRaw(editorState.getCurrentContent())).toString())
    }

    const onEditorStateChange2 = (editorState) => {
        setEditorState2(editorState)
        setOp2(draftToHtml(convertToRaw(editorState.getCurrentContent())).toString())
    }

    const handleNavigate = (e) => {
        setImgs1(Object.values(e.target.files))
    }

    useEffect(() => {
        if (data?.opisaniya) {
            const {contentBlocks, entityMap} = htmlToDraft(data?.opisaniya);
            const contentState = ContentState.createFromBlockArray(
                contentBlocks,
                entityMap
            );
            setEditorState1(EditorState.createWithContent(contentState))
            setOp1(data?.opisaniya)
        }
        if (data?.opisaniyaru) {
            const {contentBlocks, entityMap} = htmlToDraft(data?.opisaniyaru);
            const contentState = ContentState.createFromBlockArray(
                contentBlocks,
                entityMap
            );
            setEditorState2(EditorState.createWithContent(contentState))
            setOp2(data?.opisaniyaru)
        }

        setImgs(data?.photo)
    }, [data])


    return (
        <div className="contain pb50">
            <AdminHeader/>
            <div className="fields">
                <Form
                    form={form}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label={model[lang]}
                        name="madel"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <select
                            className='main_selector form-control'>
                            {field?.select?.map((select, index1) =>
                                !!select.label ? (
                                    <optgroup
                                        label={select.label}
                                        key={index1}
                                    >
                                        {select?.optgroup?.map(
                                            (opt, index2) => (
                                                <option
                                                    value={opt.value}
                                                    key={index2}
                                                >
                                                    {opt.name}
                                                </option>
                                            )
                                        )}
                                    </optgroup>
                                ) : (
                                    <option
                                        value={select.value}
                                        key={index1}
                                    >
                                        {select.name}
                                    </option>
                                )
                            )}
                        </select>
                    </Form.Item>
                    {/*<Form.Item*/}
                    {/*    label="madelru"*/}
                    {/*    name="madelru"*/}
                    {/*    rules={[*/}
                    {/*        {*/}
                    {/*            required: true,*/}
                    {/*            message: 'Please input your Model (ru)!',*/}
                    {/*        },*/}
                    {/*    ]}*/}
                    {/*>*/}
                    {/*    <select*/}
                    {/*        className='main_selector form-control'>*/}
                    {/*        {field?.select?.map((select, index1) =>*/}
                    {/*            !!select.label ? (*/}
                    {/*                <optgroup*/}
                    {/*                    label={select.label}*/}
                    {/*                    key={index1}*/}
                    {/*                >*/}
                    {/*                    {select?.optgroup?.map(*/}
                    {/*                        (opt, index2) => (*/}
                    {/*                            <option*/}
                    {/*                                value={opt.value}*/}
                    {/*                                key={index2}*/}
                    {/*                            >*/}
                    {/*                                {opt.name}*/}
                    {/*                            </option>*/}
                    {/*                        )*/}
                    {/*                    )}*/}
                    {/*                </optgroup>*/}
                    {/*            ) : (*/}
                    {/*                <option*/}
                    {/*                    value={select.value}*/}
                    {/*                    key={index1}*/}
                    {/*                >*/}
                    {/*                    {select.name}*/}
                    {/*                </option>*/}
                    {/*            )*/}
                    {/*        )}*/}
                    {/*    </select>*/}
                    {/*</Form.Item>*/}
                    <Form.Item
                        label={marka1[lang]}
                        name="marka"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your marka!',
                            },
                        ]}
                    >
                        <Select>
                            {
                                fields.find(i => i.key === "marka").select.map((y, k) => {
                                    return (
                                        <Option value={y.value}>{y.label}</Option>
                                    )
                                })
                            }
                        </Select>

                    </Form.Item>

                    {/*<Form.Item*/}
                    {/*    label="Marka (ru)"*/}
                    {/*    name="markaru"*/}
                    {/*    rules={[*/}
                    {/*        {*/}
                    {/*            required: true,*/}
                    {/*            message: 'Please input your marka (ru)!',*/}
                    {/*        },*/}
                    {/*    ]}*/}
                    {/*>*/}
                    {/*    <Select>*/}
                    {/*        {*/}
                    {/*            fields.find(i => i.key === "marka").select.map((y, k) => {*/}
                    {/*                return (*/}
                    {/*                    <Option value={y.value}>{y.label}</Option>*/}
                    {/*                )*/}
                    {/*            })*/}
                    {/*        }*/}
                    {/*    </Select>*/}
                    {/*</Form.Item>*/}

                    <Form.Item
                        label={color1[lang]}
                        name="color"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Select>

                            {
                                fields.find(i => i.key === "color").select.map((y, k) => {
                                    return (
                                        <Option value={y.value}>{y.label}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label={color2[lang]}
                        name="colorru"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Select>

                            {
                                fields.find(i => i.key === "colorru").select.map((y, k) => {
                                    return (
                                        <Option value={y.value}>{y.label}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label={year[lang]}
                        name="yili"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Select>
                            {
                                fields.find(i => i.key === "yili").select.map((y, k) => {
                                    return (
                                        <Option value={y.value}>{y.label}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label={dv[lang]}
                        name="divigitel"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label={yq[lang]}
                        name="yoqilgi"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Select>

                            {
                                fields.find(i => i.key === "yoqilgi").select.map((y, k) => {
                                    return (
                                        <Option value={y.value}>{y.label}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label={yqr[lang]}
                        name="yoqilgiru"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Select>

                            {
                                fields.find(i => i.key === "yoqilgiru").select.map((y, k) => {
                                    return (
                                        <Option value={y.value}>{y.label}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label={trans[lang]}
                        name="transmission"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Select>

                            {
                                fields.find(i => i.key === "transmission").select.map((y, k) => {
                                    return (
                                        <Option value={y.value}>{y.label}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label={transr[lang]}
                        name="transmissionru"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Select>

                            {
                                fields.find(i => i.key === "transmissionru").select.map((y, k) => {
                                    return (
                                        <Option value={y.value}>{y.label}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label={kuzuv[lang]}
                        name="kuzuv"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Select>
                            {
                                fields.find(i => i.key === "kuzuv").select.map((y, k) => {
                                    return (
                                        <Option value={y.value}>{y.label}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label={kuzuvru[lang]}
                        name="kuzuvru"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Select>
                            {
                                fields.find(i => i.key === "kuzuvru").select.map((y, k) => {
                                    return (
                                        <Option value={y.value}>{y.label}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label={perevod[lang]}
                        name="perevod"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Select>
                            {
                                fields.find(i => i.key === "perevod").select.map((y, k) => {
                                    return (
                                        <Option value={y.value}>{y.label}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label={perevodru[lang]}
                        name="perevodru"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Select>
                            {
                                fields.find(i => i.key === "perevodru").select.map((y, k) => {
                                    return (
                                        <Option value={y.value}>{y.label}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label={yurgani[lang]}
                        name="yurgani"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your yurgani!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label={narxi[lang]}
                        name="narxi"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label={aksiya[lang]}
                        name="aksiya"
                        rules={[
                            {
                                required: false,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Select>
                            {
                                fields.find(i => i.key === "aksiya").select.map((y, k) => {
                                    return (
                                        <Option value={y.value}>{y.name}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label={opisaniya[lang]}
                        name="opisaniya"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Editor
                            editorState={editorState1}
                            value={data?.opisaniya}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={onEditorStateChange1}
                            toolbar={{
                                options: [
                                    "inline",
                                    "blockType",
                                    "fontSize",
                                    "fontFamily",
                                    "list",
                                    "textAlign",
                                    "colorPicker",
                                    "link",
                                    "embedded",
                                    "emoji",
                                    "image",
                                    "remove",
                                    "history",
                                ],
                                colorPicker: {
                                    popupClassName: "colorModal",
                                },
                                link: {
                                    popupClassName: "colorModal",
                                },
                                image: {
                                    popupClassName: "colorModal",
                                },
                            }}
                        />
                    </Form.Item>
                    <div className=" m-b-20">
                        <Form.Item
                            label={opisaniyaru[lang]}
                            name="opisaniyaru"
                            rules={[
                                {
                                    required: true,
                                    message: req[lang],
                                },
                            ]}
                        >
                            <Editor
                                editorState={editorState2}
                                value={data?.opisaniyaru}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                onEditorStateChange={onEditorStateChange2}
                                toolbar={{
                                    options: [
                                        "inline",
                                        "blockType",
                                        "fontSize",
                                        "fontFamily",
                                        "list",
                                        "textAlign",
                                        "colorPicker",
                                        "link",
                                        "embedded",
                                        "emoji",
                                        "image",
                                        "remove",
                                        "history",
                                    ],
                                    colorPicker: {
                                        popupClassName: "colorModal",
                                    },
                                    link: {
                                        popupClassName: "colorModal",
                                    },
                                    image: {
                                        popupClassName: "colorModal",
                                    },
                                }}
                            />
                        </Form.Item>
                    </div>

                    <Form.Item
                        label={status[lang]}
                        name="credit"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Select>
                            {
                                fields.find(i => i.key === "credit").select.map((y, k) => {
                                    return (
                                        <Option value={y.value}>{y.label}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        style={{marginTop: "30px"}}
                    >
                        <Button type="primary" htmlType="submit">
                            {save[lang]}
                        </Button>
                    </Form.Item>
                </Form>

                <div style={{marginLeft: "260px"}}>
                    <Input type="file" multiple onChange={e => handleNavigate(e)}/>
                    <Row gutter={[20, 20]}>
                        {
                            imgs1?.length ?
                                imgs1?.map((i, k) => {
                                    let a = null
                                    if (i) {
                                        let reader = new FileReader();
                                        reader.onload = (e) => {
                                            a = e.target.result
                                        };
                                        reader.readAsDataURL(i);
                                    }
                                    return (
                                        <Image
                                            width={200}
                                            src={a}
                                            key={k}
                                        />
                                    )
                                })
                                :
                                imgs?.map((i, k) => {
                                    return (
                                        <Image
                                            width={200}
                                            src={i}
                                            key={k}
                                        />
                                    )
                                })
                        }
                    </Row>
                </div>
            </div>
        </div>
    )
        ;
}

export default UpdateCar;
