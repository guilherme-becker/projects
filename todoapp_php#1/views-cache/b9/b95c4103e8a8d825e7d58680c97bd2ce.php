<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;
use Twig\TemplateWrapper;

/* index.twig */
class __TwigTemplate_27569a696f1a2144b80852d9abd81099 extends Template
{
    private Source $source;
    /**
     * @var array<string, Template>
     */
    private array $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 1
        yield "<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css\" integrity=\"sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />
    <link rel=\"stylesheet\" href=\"/res/style.css\">
    <title>";
        // line 8
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["title"] ?? null), "html", null, true);
        yield "</title>
</head>
<body>

    <div class=\"container\">
        <h1>";
        // line 13
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["title"] ?? null), "html", null, true);
        yield "</h1>
        <div id=\"to-do\">
            ";
        // line 15
        if (($context["error"] ?? null)) {
            // line 16
            yield "                <p class=\"error\">";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["error"] ?? null), "html", null, true);
            yield "</p>
            ";
        }
        // line 18
        yield "            <form action=\"save.php\" method=\"post\">
                <label for=\"name\">To do</label>
                <input type=\"text\" name=\"name\" id=\"name\">
                <button type=\"submit\">Inserir</button>
            </form>
        </div>
    </div>

    <div class=\"container\">
        <div id=\"display\">
            ";
        // line 28
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(($context["list"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 29
            yield "            <div class=\"user-save\">
                ";
            // line 30
            if (CoreExtension::getAttribute($this->env, $this->source, $context["item"], "completed", [], "any", false, false, false, 30)) {
                // line 31
                yield "                <p><s>";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["item"], "to_do", [], "any", false, false, false, 31), "html", null, true);
                yield "</s></p>
                ";
            } else {
                // line 33
                yield "                <p>";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["item"], "to_do", [], "any", false, false, false, 33), "html", null, true);
                yield "</p>
                ";
            }
            // line 35
            yield "                <div>
                    <a href=\"edit.php/?id=";
            // line 36
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["item"], "id", [], "any", false, false, false, 36), "html", null, true);
            yield "\" id=\"btn-edit\"><i class=\"fa-solid fa-check\"></i></a>
                    <a href=\"delete.php/?id=";
            // line 37
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["item"], "id", [], "any", false, false, false, 37), "html", null, true);
            yield "\" id=\"btn-delete\"><i class=\"fa-solid fa-trash\"></i></a> 
                </div>
            </div>
            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_key'], $context['item'], $context['_parent']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 41
        yield "        </div>
    </div>
    


</body>
</html>";
        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "index.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable(): bool
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo(): array
    {
        return array (  122 => 41,  112 => 37,  108 => 36,  105 => 35,  99 => 33,  93 => 31,  91 => 30,  88 => 29,  84 => 28,  72 => 18,  66 => 16,  64 => 15,  59 => 13,  51 => 8,  42 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css\" integrity=\"sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />
    <link rel=\"stylesheet\" href=\"/res/style.css\">
    <title>{{ title }}</title>
</head>
<body>

    <div class=\"container\">
        <h1>{{ title }}</h1>
        <div id=\"to-do\">
            {% if error %}
                <p class=\"error\">{{ error }}</p>
            {% endif %}
            <form action=\"save.php\" method=\"post\">
                <label for=\"name\">To do</label>
                <input type=\"text\" name=\"name\" id=\"name\">
                <button type=\"submit\">Inserir</button>
            </form>
        </div>
    </div>

    <div class=\"container\">
        <div id=\"display\">
            {% for item in list %}
            <div class=\"user-save\">
                {% if item.completed %}
                <p><s>{{item.to_do}}</s></p>
                {% else %}
                <p>{{item.to_do}}</p>
                {% endif %}
                <div>
                    <a href=\"edit.php/?id={{item.id}}\" id=\"btn-edit\"><i class=\"fa-solid fa-check\"></i></a>
                    <a href=\"delete.php/?id={{item.id}}\" id=\"btn-delete\"><i class=\"fa-solid fa-trash\"></i></a> 
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
    


</body>
</html>", "index.twig", "/home/guilherme/php/phpsite/views/index.twig");
    }
}
