<?php
/**
 * Calendar for ExpressionEngine
 *
 * @package       Solspace:Calendar
 * @author        Solspace, Inc.
 * @copyright     Copyright (c) 2010-2020, Solspace, Inc.
 * @link          https://docs.solspace.com/expressionengine/calendar/
 * @license       https://docs.solspace.com/license-agreement/
 */

namespace Solspace\Addons\Calendar\Utilities;

class Plugin
{
    /**
     * @param string $name
     * @param mixed  $default
     *
     * @return mixed
     */
    public function getParam($name, $default = null)
    {
        $param = ee()->TMPL->fetch_param($name);

        if (!$param) {
            return $default;
        }

        return $param;
    }

    /**
     * @param string $name
     * @param mixed  $default
     *
     * @return mixed
     */
    public function getPost($name, $default = null)
    {
        $value = ee()->input->post($name);

        if (!$value) {
            return $default;
        }

        return $value;
    }

    /**
     * @param mixed $object
     */
    public function returnJson($object)
    {
        echo json_encode($object);
        die();
    }

    /**
     * Redirects to a given $url
     *
     * @param string $url
     */
    public function redirect($url)
    {
        header('Location: ' . $url);
        die();
    }

    /**
     * Returns a path to the third-party theme folder
     *
     * @return string
     */
    public function theme_folder_url()
    {
        return rtrim(URL_THIRD_THEMES, '/') . '/' . $this->getAddonLowerName() . '/';
    }

    /**
     * @return string
     */
    public function returnNoResults()
    {
        $pattern = '/{if (?:freeform_next|submission|form):no_results}(.*?){\/if}/s';

        if (preg_match($pattern, ee()->TMPL->tagdata, $match)) {
            return $match[1];
        }

        return ee()->TMPL->no_results();
    }

    /**
     * @return string
     */
    private function getAddonLowerName()
    {
        return AddonInfo::getInstance()->getLowerName();
    }
}
