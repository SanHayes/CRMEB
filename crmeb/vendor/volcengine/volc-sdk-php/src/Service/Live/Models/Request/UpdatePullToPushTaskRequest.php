<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: live/request/request_live.proto

namespace Volc\Service\Live\Models\Request;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Volcengine.Live.Models.Request.UpdatePullToPushTaskRequest</code>
 */
class UpdatePullToPushTaskRequest extends \Google\Protobuf\Internal\Message
{
    /**
     *任务标题
     *
     * Generated from protobuf field <code>string Title = 1;</code>
     */
    public $Title = '';
    /**
     *任务ID
     *
     * Generated from protobuf field <code>string TaskId = 2;</code>
     */
    public $TaskId = '';
    /**
     *开始时间，unix时间戳，单位s
     *
     * Generated from protobuf field <code>int64 StartTime = 3;</code>
     */
    public $StartTime = 0;
    /**
     *结束时间，unix时间戳，单位s，与开始时间跨度不超过7天
     *
     * Generated from protobuf field <code>int64 EndTime = 4;</code>
     */
    public $EndTime = 0;
    /**
     *回调地址，长度小于2000
     *
     * Generated from protobuf field <code>string CallbackURL = 5;</code>
     */
    public $CallbackURL = '';
    /**
     *拉流转推地址类型，0：直播，1：点播
     *
     * Generated from protobuf field <code>int32 Type = 6;</code>
     */
    public $Type = 0;
    /**
     *点播时，拉流地址的循环模式，Type=1时必选，-1：顺序循环
     *
     * Generated from protobuf field <code>int32 CycleMode = 7;</code>
     */
    public $CycleMode = 0;
    /**
     *推流目标地址
     *
     * Generated from protobuf field <code>string DstAddr = 8;</code>
     */
    public $DstAddr = '';
    /**
     *直播拉流地址,Type=0时必填
     *
     * Generated from protobuf field <code>string SrcAddr = 9;</code>
     */
    public $SrcAddr = '';
    /**
     *点播拉流地址，Type=1时必填
     *
     * Generated from protobuf field <code>repeated string SrcAddrS = 10;</code>
     */
    public $SrcAddrS;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $Title
     *          任务标题
     *     @type string $TaskId
     *          任务ID
     *     @type int|string $StartTime
     *          开始时间，unix时间戳，单位s
     *     @type int|string $EndTime
     *          结束时间，unix时间戳，单位s，与开始时间跨度不超过7天
     *     @type string $CallbackURL
     *          回调地址，长度小于2000
     *     @type int $Type
     *          拉流转推地址类型，0：直播，1：点播
     *     @type int $CycleMode
     *          点播时，拉流地址的循环模式，Type=1时必选，-1：顺序循环
     *     @type string $DstAddr
     *          推流目标地址
     *     @type string $SrcAddr
     *          直播拉流地址,Type=0时必填
     *     @type string[]|\Google\Protobuf\Internal\RepeatedField $SrcAddrS
     *          点播拉流地址，Type=1时必填
     * }
     */
    public function __construct($data = NULL) {
        \Volc\Service\Live\Models\GPBMetadata\RequestLive::initOnce();
        parent::__construct($data);
    }

    /**
     *任务标题
     *
     * Generated from protobuf field <code>string Title = 1;</code>
     * @return string
     */
    public function getTitle()
    {
        return $this->Title;
    }

    /**
     *任务标题
     *
     * Generated from protobuf field <code>string Title = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setTitle($var)
    {
        GPBUtil::checkString($var, True);
        $this->Title = $var;

        var_dump( "#####################");
        var_dump( $var);
        var_dump( "#####################");
        return $this;
    }

    /**
     *任务ID
     *
     * Generated from protobuf field <code>string TaskId = 2;</code>
     * @return string
     */
    public function getTaskId()
    {
        return $this->TaskId;
    }

    /**
     *任务ID
     *
     * Generated from protobuf field <code>string TaskId = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setTaskId($var)
    {
        GPBUtil::checkString($var, True);
        $this->TaskId = $var;

        return $this;
    }

    /**
     *开始时间，unix时间戳，单位s
     *
     * Generated from protobuf field <code>int64 StartTime = 3;</code>
     * @return int|string
     */
    public function getStartTime()
    {
        return $this->StartTime;
    }

    /**
     *开始时间，unix时间戳，单位s
     *
     * Generated from protobuf field <code>int64 StartTime = 3;</code>
     * @param int|string $var
     * @return $this
     */
    public function setStartTime($var)
    {
        GPBUtil::checkInt64($var);
        $this->StartTime = $var;
        var_dump( "#####################");
        var_dump( $this->StartTime);
        var_dump( "#####################");
        return $this;
    }

    /**
     *结束时间，unix时间戳，单位s，与开始时间跨度不超过7天
     *
     * Generated from protobuf field <code>int64 EndTime = 4;</code>
     * @return int|string
     */
    public function getEndTime()
    {
        return $this->EndTime;
    }

    /**
     *结束时间，unix时间戳，单位s，与开始时间跨度不超过7天
     *
     * Generated from protobuf field <code>int64 EndTime = 4;</code>
     * @param int|string $var
     * @return $this
     */
    public function setEndTime($var)
    {
        GPBUtil::checkInt64($var);
        $this->EndTime = $var;

        return $this;
    }

    /**
     *回调地址，长度小于2000
     *
     * Generated from protobuf field <code>string CallbackURL = 5;</code>
     * @return string
     */
    public function getCallbackURL()
    {
        return $this->CallbackURL;
    }

    /**
     *回调地址，长度小于2000
     *
     * Generated from protobuf field <code>string CallbackURL = 5;</code>
     * @param string $var
     * @return $this
     */
    public function setCallbackURL($var)
    {
        GPBUtil::checkString($var, True);
        $this->CallbackURL = $var;

        return $this;
    }

    /**
     *拉流转推地址类型，0：直播，1：点播
     *
     * Generated from protobuf field <code>int32 Type = 6;</code>
     * @return int
     */
    public function getType()
    {
        return $this->Type;
    }

    /**
     *拉流转推地址类型，0：直播，1：点播
     *
     * Generated from protobuf field <code>int32 Type = 6;</code>
     * @param int $var
     * @return $this
     */
    public function setType($var)
    {
        GPBUtil::checkInt64($var);
        $this->Type = $var;
        var_dump( "#####################");
        var_dump( $var);
        var_dump( "#####################");

        return $this;
    }

    /**
     *点播时，拉流地址的循环模式，Type=1时必选，-1：顺序循环
     *
     * Generated from protobuf field <code>int32 CycleMode = 7;</code>
     * @return int
     */
    public function getCycleMode()
    {
        return $this->CycleMode;
    }

    /**
     *点播时，拉流地址的循环模式，Type=1时必选，-1：顺序循环
     *
     * Generated from protobuf field <code>int32 CycleMode = 7;</code>
     * @param int $var
     * @return $this
     */
    public function setCycleMode($var)
    {
        GPBUtil::checkInt32($var);
        $this->CycleMode = $var;

        return $this;
    }

    /**
     *推流目标地址
     *
     * Generated from protobuf field <code>string DstAddr = 8;</code>
     * @return string
     */
    public function getDstAddr()
    {
        return $this->DstAddr;
    }

    /**
     *推流目标地址
     *
     * Generated from protobuf field <code>string DstAddr = 8;</code>
     * @param string $var
     * @return $this
     */
    public function setDstAddr($var)
    {
        GPBUtil::checkString($var, True);
        $this->DstAddr = $var;

        return $this;
    }

    /**
     *直播拉流地址,Type=0时必填
     *
     * Generated from protobuf field <code>string SrcAddr = 9;</code>
     * @return string
     */
    public function getSrcAddr()
    {
        return $this->SrcAddr;
    }

    /**
     *直播拉流地址,Type=0时必填
     *
     * Generated from protobuf field <code>string SrcAddr = 9;</code>
     * @param string $var
     * @return $this
     */
    public function setSrcAddr($var)
    {
        GPBUtil::checkString($var, True);
        $this->SrcAddr = $var;

        return $this;
    }

    /**
     *点播拉流地址，Type=1时必填
     *
     * Generated from protobuf field <code>repeated string SrcAddrS = 10;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getSrcAddrS()
    {
        return $this->SrcAddrS;
    }

    /**
     *点播拉流地址，Type=1时必填
     *
     * Generated from protobuf field <code>repeated string SrcAddrS = 10;</code>
     * @param string[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setSrcAddrS($var)
    {
//        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->SrcAddrS = $var;

        return $this;
    }

}
